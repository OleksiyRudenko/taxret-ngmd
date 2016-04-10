[2016-04-10] Created

[2016-04-10] Latest major update

# [YYYY-MM-DD] tag

The `[YYYY-MM-DD x]` tag denotes, unless otherwise implicitly indicated, that some
piece of information was actual on the date specified in brackets,
where `YYYY`, `MM` and `DD` stand for year, month and day respectively and optional
modifier `x` gives hints on the date.

## Table of contents

1. [Tagging external references](#tagging-external-references)
1. [Tagging documents](#tagging-documents)
1. [Tagging text blocks](#tagging-text-blocks)
1. [Conclusion](#conclusion)

## Tagging external references

If the tag follows external reference that means that author used some content, which
was actual as of the date specified. If the target resource specifies some date
(date of blog post publication, latest commit to the targeted document) then
such date is used as the tag's body. If there is no relevant date specified then
current date may be used.

That gives the reader a clue on how long ago the resource was checked by author.
And if it happened too long ago and author quotes referred resource or grounds
on it then the resource might be worth checking for updates
(which may sometimes lead to total uselessness of author's conclusions).

The `x` modifier can give some hints.

|  x  | Meaning |
|:---:|:---     |
| !   | It is unlikely that referred resource ever change. Usual for blog posts. |
| 6m  | Resource wasn't updated for at least 6 month as of the date the author referred to it |
| 2y  | Resource wasn't updated for at least 2 years as of the date the author referred to it |
| +   | As of the date resource was last checked it was updated recently |
| *   | As of the date resource was last checked it was updated recently & multiple times |

## Tagging documents

Put a couple of tags in the very beginning of the document supplying those with meaningful
comments to giive the reader a clue on how long ago the document was established and/or
updated.

## Tagging text blocks

If `[YYYY-MM-DD]` precedes a block then it denotes that subsequent
block or couple of blocks or section was created or last amended on date specified.

If `[YYYY-MM-DD]` is put on separate line, then it for sure
refers to a number of blocks or entire section.

If `[YYYY-MM-DD/]` is attached in the end of some text, then it
refers to preceding part of sentence. The optional slash stresses that
the date context **ends** on the tag.

The pair of tag and its closing counterpart `[YYYY-MM-DD]...[/YYYY-MM-DD]`
can be used. Meaning behind is obvious.

For shorter parts of text `[YYYY-MM-DD]...[/]` can be used.

## Conclusion

This tag (I believe) would help to identify amendments
since reader's last visit (if one can remember) or the period of
time related information was up-to-date. So, if `[YYYY-MM-DD]` is
far too long ago then related info most likely should be cross-checked.
