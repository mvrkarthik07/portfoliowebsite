# Contrast Ratios

Computed with the WCAG relative luminance formula:

`(L1 + 0.05) / (L2 + 0.05)`, where `L1` is the lighter relative luminance and `L2` is the darker relative luminance.

| Use | Foreground token | Background token | Ratio | Result |
| --- | --- | --- | ---: | --- |
| Body text | `--text-primary` | `--bg-base` | 17.48:1 | PASS AA normal + AAA |
| Surface body text | `--text-primary` | `--bg-surface` | 15.84:1 | PASS AA normal + AAA |
| Raised surface body text | `--text-primary` | `--bg-surface-raised` | 14.49:1 | PASS AA normal + AAA |
| Secondary body text | `--text-secondary` | `--bg-base` | 7.12:1 | PASS AA normal + AAA |
| Surface secondary text | `--text-secondary` | `--bg-surface` | 6.45:1 | PASS AA normal |
| Raised secondary text | `--text-secondary` | `--bg-surface-raised` | 5.90:1 | PASS AA normal |
| Placeholder text | `--text-secondary` | `--bg-surface` | 6.45:1 | PASS AA normal |
| Form labels | `--text-primary` | `--bg-base` | 17.48:1 | PASS AA normal + AAA |
| Form input text | `--text-primary` | `--bg-surface` | 15.84:1 | PASS AA normal + AAA |
| Tag chip text | `--text-primary` | `--bg-base` | 17.48:1 | PASS AA normal + AAA |
| Tag chip text on surface | `--text-primary` | `--bg-surface` | 15.84:1 | PASS AA normal + AAA |
| Signal link text | `--signal` | `--bg-base` | 7.78:1 | PASS AA normal + AAA |
| Signal link on surface | `--signal` | `--bg-surface` | 7.05:1 | PASS AA normal + AAA |
| CTA button text | `--bg-base` | `--signal` | 7.78:1 | PASS AA normal + AAA |
| Error status text/border | `--error` | `--bg-surface` | 5.51:1 | PASS AA normal |
| Error on base | `--error` | `--bg-base` | 6.09:1 | PASS AA normal |
