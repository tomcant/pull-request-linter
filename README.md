# Pull Request Linter

```yaml
on:
  pull_request:
    types:
    - opened
    - edited
    - labeled
    - unlabeled

jobs:
  pull-request-linter:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: tomcant/pull-request-linter@v1
      with:
        minBodyLength: '20'
        bodyMustNotContain: 'Foo bar'
        mustHaveReleaseCategory: 'true'
```
