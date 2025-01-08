import { ModeToggle } from "../../components/ui/modeToggle";
import FontChanger from "../../components/ui/fontChanger";

export default function SettingsPage() {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-5 text-center">Settings</h1>
            <ModeToggle />
            <FontChanger />
        </div>
    )
}