### Dev

-pvc flag watches for changes in the files and rebuilds the pdf file automatically.

```bash
latexmk -pvc --shell-escape -pdf munkanaplo.tex
```

### Build

```bash
latexmk --shell-escape -pdf munkanaplo.tex
# or
pdflatex --shell-escape munkanaplo.tex
```

### Clear latexmk/pdflatex temporary files

```bash
latexmk -c
```
