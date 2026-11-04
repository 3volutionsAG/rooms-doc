"""Listet zu einem Bereich unter content/de jede Seite mit ihren eingebundenen Bildern und Bildunterschriften.

Aufruf: python manifest.py 3VROOMS/Kalender
"""
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'content', 'de')
IMAGE = re.compile(r'\.(png|jpe?g|gif)$', re.I)
SHORTCODE = re.compile(r'\{\{<\s*imgproc\s+"?([^"\s]+)"?[^>]*>\}\}\s*(.*?)\s*\{\{<\s*/imgproc', re.S)
MARKDOWN = re.compile(r'!\[([^\]]*)\]\(([^)\s]+)')


def main(area):
    start = os.path.normpath(os.path.join(ROOT, area))
    used = set()
    for folder, _, files in sorted(os.walk(start)):
        images = [f for f in files if IMAGE.search(f)]
        if '_index.md' not in files:
            continue
        rel = os.path.relpath(folder, ROOT).replace(os.sep, '/')
        text = open(os.path.join(folder, '_index.md'), encoding='utf-8').read()
        rows = []
        for m in SHORTCODE.finditer(text):
            # Hugo findet das Bild über eine Teilzeichenfolge des Dateinamens. Der kürzeste Treffer entspricht der Datei.
            hits = sorted((f for f in images if m[1].lower() in f.lower()), key=len)
            target = hits[0] if hits else f'FEHLT:{m[1]}'
            used.add(os.path.join(rel, target))
            rows.append(f'  {target}  --  {" ".join(m[2].split())}')
        for m in MARKDOWN.finditer(text):
            used.add(os.path.join(rel, m[2]))
            rows.append(f'  {m[2]}  --  {m[1]}')
        unused = [f for f in images if os.path.join(rel, f) not in used]
        if rows or unused:
            print(rel)
            print('\n'.join(rows))
            if unused:
                print('  nicht eingebunden: ' + ', '.join(sorted(unused)))


if __name__ == '__main__':
    main(sys.argv[1])
