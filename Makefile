ARCHIVE := youtube-disable-number-seek.zip
FILES := $(wildcard *.js) manifest.json

.PHONY: clean build

$(ARCHIVE) : $(FILES)
	zip --recurse-paths --filesync $(ARCHIVE) $(FILES)

build:
	$(ARCHIVE)
clean:
	rm --force $(ARCHIVE)
