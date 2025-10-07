# Real-Time Emotion Detection

A stunning web application that uses AI to detect and classify human emotions in real-time through your webcam. Built with cutting-edge technologies including Three.js for 3D graphics and face-api.js for facial recognition.

## Features

- **Real-Time Detection**: Instant emotion recognition using advanced facial analysis
- **Multi-Emotion Support**: Detects happy, sad, angry, surprised, neutral, fearful, and disgusted emotions
- **Confidence Scoring**: Displays precise confidence percentages for each detected emotion
- **3D Animated Homepage**: Stunning Three.js powered 3D graphics with floating emotion spheres and rotating cubes
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Privacy First**: All processing happens locally in your browser - no data is sent to servers

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **3D Graphics**: Three.js
- **AI/ML**: face-api.js, TensorFlow.js
- **UI Components**: Shadcn/ui, Radix UI
- **Backend**: Express.js, Node.js

## Getting Started

### Prerequisites

- Node.js 20 or higher
- Modern web browser with webcam support

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd emotion-detection-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to the provided localhost URL

## Usage

1. Click the glowing "Start Detection" button on the homepage
2. Grant camera permissions when prompted
3. Wait for the AI models to load
4. See real-time emotion detection with bounding boxes and confidence scores
5. Click "Stop Detection" to return to the homepage

## How It Works

1. **Camera Access**: The app requests access to your webcam using WebRTC
2. **Face Detection**: face-api.js detects faces in real-time video frames
3. **Emotion Classification**: Neural networks analyze facial expressions
4. **Visual Feedback**: Bounding boxes and labels show detected emotions with confidence scores

## Privacy

All emotion detection processing happens locally in your browser. No images or video data is transmitted to any server. Your privacy is fully protected.

## Deployment

This app is ready to deploy on Replit:

1. Click the "Deploy" button in your Replit workspace
2. Follow the deployment wizard
3. Your app will be live with a public URL

## Screenshots

The app features:
- A stunning 3D homepage with animated emotion spheres
- Real-time webcam feed with emotion overlays
- Clean, modern UI with dark/light mode support
- Responsive design that works on all devices

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for learning or commercial purposes.

## Acknowledgments

- face-api.js for the powerful facial recognition library
- Three.js for 3D graphics capabilities
- TensorFlow.js for machine learning in the browser
- Shadcn/ui for beautiful UI components
