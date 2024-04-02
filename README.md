# A Packaged React Application

A simple demo client for demonsrating how to build & package frontend application into a Python package.
This template was created by Vitejs.

## Getting Started

### Usage

You can install this client in your Python backend server:

```shell
pip install vite-project
```

## Contribution

### Installation

```shell
npm install
npm run build
```

### Packaging

```shell
touch setup.py
```

with the following content:

```python
from setuptools import setup
from pathlib import Path

cwd = Path(__file__).parent
long_description = (cwd / "README.md").read_text()

setup(
    name="vite-project",
    version="0.0.1",
    package_dir={"vite_project": "dist"},
    package_data={"vite_project": ["**/*.*"]},
    long_description=long_description,
    long_description_content_type="text/markdown",
)

```
