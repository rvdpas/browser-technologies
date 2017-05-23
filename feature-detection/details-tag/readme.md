# Details & Summary elements

## What it looks like
```<details>
        <summary>This is visible</summary>
        <p>This is visible when clicked on summary</p>
    </details>
```

## Can i use
![Details & Summary elements](https://github.com/rvdpas/browser-technologies/blob/master/feature-detection/details-tag/details.png)

## Fallback for browsers that don't support the details tag
```if (!('open' in document.createElement('details'))) {
    // We create a click event fallback here
}```

## Live version
[Live version](https://rvdpas.github.io/minor/browser-technologies/features/details-tag/index.html)

## Sources

