ARCHIVE := youtube-disable-number-seek.zip
FILES := $(wildcard *.js) manifest.json

.PHONY: clean build
build:
	zip -r -FS $(ARCHIVE) $(FILES)
clean:
	rm -f $(ARCHIVE)
