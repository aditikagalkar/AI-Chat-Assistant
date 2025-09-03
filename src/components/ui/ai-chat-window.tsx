import { Button } from "@/components/ui/button";
import { ArrowUp, X } from "lucide-react";

export const AiChatWindow = ({ isChatOpen, setIsChatOpen }) => {
    return (
        <div className="fixed bottom-4 right-4 z-50 w-80 h-96 shadow-lg flex flex-col">
            <div className="bg-rose-gold rounded-t-lg flex items-center px-3 py-2 chat-header">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="!text-white/70 hover:!text-luxury-black/40"
                >
                    <X
                        className="h-5 w-5"
                        strokeWidth={2.5}
                    />
                </Button>
                <h2 className="font-semibold text-white">LUXE Assistant</h2>
            </div>
            <div className="flex-1 bg-background p-3 overflow-y-auto"></div>
            <div className="flex items-center rounded-b-lg px-3 py-2 gap-2 bg-nude">
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 h-9 px-2 py-1 rounded-md border border-white/30 bg-white/30 outline-none focus:ring-1 focus:ring-white"
                />
                <Button variant="secondary" size="sm">
                    <ArrowUp className="h-5 w-5" />
                </Button>
            </div>
        </div >
    );
};