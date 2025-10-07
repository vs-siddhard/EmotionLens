import { ControlPanel } from '../ControlPanel';

export default function ControlPanelExample() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <ControlPanel onStop={() => console.log('Stop detection clicked')} />
    </div>
  );
}
