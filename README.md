### Dev

-pvc flag watches for changes in the files and rebuilds the pdf file automatically.

```bash
latexmk -pvc --shell-escape -pdf munkanaplo.tex
```

### Build

On first try, the TOC might not be generated correctly. Run the command again to fix it.

```bash
latexmk --shell-escape -pdf munkanaplo.tex
# or
pdflatex --shell-escape munkanaplo.tex
```

### Clear latexmk/pdflatex temporary files

```bash
latexmk -c
```
