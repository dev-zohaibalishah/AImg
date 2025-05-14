# AImg – AI-Powered Image Enhancement Tool

**AImg** is a web-based application that provides fast and intelligent image enhancement using the [Pickwish API](https://www.pickwish.com/api). Users can enhance image quality, remove backgrounds, and upscale resolution seamlessly through an intuitive user interface.

## Features

* **AI Image Enhancement** – Improve clarity and overall quality using advanced AI models.
* **Background Removal** – Remove backgrounds with precision in one click.
* **Image Upscaling** – Enlarge images without losing quality.
* **User-Friendly Interface** – Drag-and-drop upload with real-time feedback.
* **API-Powered Processing** – Utilizes Pickwish API for reliable enhancement tasks.

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

3. Create a `.env` file in the root directory and add your Pickwish API key:

   ```bash
   VITE_PICKWISH_API_KEY=your_pickwish_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## Usage

1. Open the application in your browser.
2. Upload an image using drag-and-drop or the file picker.
3. Select an enhancement option:

   * Background Removal
   * Image Enhancement
   * Image Upscaling
4. Click “Enhance” to process the image using the Pickwish API.
5. Download the enhanced result once processing is complete.

## Technologies Used

* React.js / Vite *(or your actual frontend stack)*
* Tailwind CSS *(or your actual styling method)*
* Pickwish API

## Folder Structure

```
aimg/
├── public/
├── src/
│   ├── components/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

## API Reference

**Base URL**: `https://api.pickwish.com/v1`

Common endpoints used:

* `POST /remove-background`
* `POST /enhance-image`
* `POST /upscale-image`

Refer to the [official Pickwish API documentation](https://www.pickwish.com/api) for detailed usage and parameters.

## License

This project is licensed under the MIT License.

## Acknowledgments

* [Pickwish](https://www.pickwish.com) for providing the image enhancement API.
* All open-source contributors and libraries used in this project.

---
