import DetectionPage from '../DetectionPage';

export default function DetectionPageExample() {
  return <DetectionPage onStop={() => console.log('Stop detection clicked')} />;
}
