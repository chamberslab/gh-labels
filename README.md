# GitHub Label Generator

This project is a GitHub Label Generator service that utilizes Cloudflare Workers and RedwoodSDK to dynamically generate SVG badges via a REST API.

## Table of Contents

- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Usage

Once the dependencies are installed, you can deploy the Cloudflare Worker.

```bash
pnpm release
```

## API Endpoints

### Generate a SVG

**Example Request:**

```
GET /passing/example.svg
GET /optional/feature.svg
GET /blocking/urgent.svg
```

### Service Information

- **Endpoint:** `GET /`
- **Description:** Returns information about the service.