
from pathlib import Path
from PIL import Image, ImageOps
import os
import tempfile

PASTA = Path(__file__).resolve().parent / "public" / "images"

DIMENSAO_MAXIMA = 3000
QUALIDADE = 88

total_antes = 0
total_depois = 0
otimizadas = 0
ignoradas = 0
erros = 0

arquivos = [
    p for p in PASTA.rglob("*")
    if p.is_file() and p.suffix.lower() in (".jpg", ".jpeg")
]

print(f"Encontradas {len(arquivos)} imagens JPEG.")

for numero, caminho in enumerate(arquivos, 1):
    tamanho_original = caminho.stat().st_size
    total_antes += tamanho_original
    temporario = None

    try:
        with Image.open(caminho) as original:
            foto = ImageOps.exif_transpose(original)
            perfil = foto.info.get("icc_profile")

            if max(foto.size) <= DIMENSAO_MAXIMA and tamanho_original < 800_000:
                ignoradas += 1
                total_depois += tamanho_original
                continue

            foto.thumbnail(
                (DIMENSAO_MAXIMA, DIMENSAO_MAXIMA),
                Image.Resampling.LANCZOS
            )

            if foto.mode != "RGB":
                foto = foto.convert("RGB")
                perfil = None

            opcoes = {
                "format": "JPEG",
                "quality": QUALIDADE,
                "optimize": True,
                "progressive": True
            }

            if perfil:
                opcoes["icc_profile"] = perfil

            fd, nome_temp = tempfile.mkstemp(
                suffix=".jpg",
                dir=caminho.parent
            )
            os.close(fd)
            temporario = Path(nome_temp)

            foto.save(temporario, **opcoes)

        novo_tamanho = temporario.stat().st_size

        if novo_tamanho < tamanho_original:
            os.replace(temporario, caminho)
            total_depois += novo_tamanho
            otimizadas += 1
        else:
            temporario.unlink()
            total_depois += tamanho_original
            ignoradas += 1

        if numero % 10 == 0:
            print(f"Processadas: {numero}/{len(arquivos)}")

    except Exception as e:
        erros += 1
        total_depois += tamanho_original
        print(f"ERRO: {caminho.name}: {e}")

        if temporario and temporario.exists():
            temporario.unlink()

print("\n--- RESULTADO ---")
print(f"Otimizadas: {otimizadas}")
print(f"Não alteradas: {ignoradas}")
print(f"Erros: {erros}")
print(f"Antes: {total_antes / 1048576:.2f} MB")
print(f"Depois: {total_depois / 1048576:.2f} MB")
print(f"Economia: {(total_antes - total_depois) / 1048576:.2f} MB")
