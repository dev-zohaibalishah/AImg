# AImg – AI-Powered Image Enhancement Tool

**AImg** is a web-based application that provides fast and intelligent image enhancement using the [Pickwish API](https://www.pickwish.com/api). Users can enhance image quality, remove backgrounds, and upscale resolution seamlessly through an intuitive user interface.

## Preview Link
[https://aimg-sepia.vercel.app/](https://aimg-sepia.vercel.app/)

## Features

* **AI Image Enhancement** – Improve clarity and overall quality using advanced AI models.
* **User-Friendly Interface** – Drag-and-drop upload with real-time feedback.
* **API-Powered Processing** – Utilizes Pickwish API for reliable enhancement tasks.

## Future Goals

* **Background Removal** – Remove backgrounds with precision in one click.
* **Image Upscaling** – Enlarge images without losing quality.
* **Background Generation** – Generate a background of any image.

## Getting Started

### Prerequisites

* Node.js and npm installed on your machine.
* A valid [Pickwish API key](https://www.pickwish.com/api).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/aimg.git
   cd aimg
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Replace the api key in the utils/enhanced.js file:

   ```bash
   API_KEY=your_pickwish_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## Usage

1. Open the application in your browser.
2. Upload an image using drag-and-drop or the file picker.
3. The image boxes will show the original image uploaded and the enhanced image using the Pickwish API.
4. Download the enhanced result once processing is complete.

## Technologies Used

* React.js / Vite 
* Tailwind CSS 
* Pickwish API

## Folder Structure

```
aimg/
├── public/
├── src/
│   ├── components/
│   ├── utils/
│   └── App.jsx
├── package.json
└── README.md
```

## API Reference

**Base URL**: `https://api.pickwish.com/`

Common endpoints used:

* `GET /enhance-image`
* `POST /enhance-image`

Refer to the [official Pickwish API documentation](https://www.pickwish.com/api) for detailed usage and parameters.

## License

This project is licensed under the MIT License.

## Acknowledgments

* [Pickwish](https://www.pickwish.com) for providing the image enhancement API.
* All open-source contributors and libraries used in this project.

---
