# generate a PNG for each slide
slidev export --format png --output build                      # no clicks
slidev export --with-clicks --format png --output build-clicks # clicks

# convert the PNGs to a PDF
img2pdf $(ls build/*.png | sort -V) -o ppml.pdf
img2pdf build-clicks/*.png -o ppml-presentation.pdf

rm -r build/
rm -r build-clicks/
