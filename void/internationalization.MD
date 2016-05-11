# Unicode Scripts

JS doesn't support natively non-latin sets.

[Unicode scripts](https://en.wikipedia.org/wiki/Cyrillic_script_in_Unicode)

[Unicode range RegExp generator](http://apps.timwhitlock.info/js/regex#)

## Ukrainian

```
\u0410-\u0429 А-Щ
\u0430-\u0449 а-щ
\u042C        Ь
\u044C        ь
\u042E-\u042F Ю-Я
\u044E-\u044F ю-я
\u0404        Є
\u0454        є
\u0406        І
\u0456        і
\u0407        Ї
\u0457        ї
\u0490        Ґ
\u0491        ґ
```
Ranges
 * UC: `\u0410-\u0429\u042C\u042E-\u042F\u0404\u0406\u0407\u0490`
 * LC: `\u0430-\u0449\u044C\u044E-\u044F\u0454\u0456\u0457\u0491`
 * UC+LC: `\u0410-\u0429\u0430-\u0449\u042C\u044C\u042E-\u042F\u044E-\u044F\u0404\u0454\u0406\u0456\u0407\u0457\u0490\u0491`

## Ukrainian vs Latin set
(characters visually equivalent in both)

Latin only:
 * UC:
 * LC:
 * UC+LC:

Ukrainian only:
 * UC:
 * LC:
 * UC+LC:

Both:
 * UC:
 * LC:
 * UC+LC:
