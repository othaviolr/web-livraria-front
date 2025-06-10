import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";

interface AudioPlayerProps {
  title: string;
  author: string;
  coverImage: string;
  isPlaying?: boolean;
}

export const AudioPlayer = ({
  title,
  author,
  coverImage,
  isPlaying = false,
}: AudioPlayerProps) => {
  const [playing, setPlaying] = useState(isPlaying);
  const [progress, setProgress] = useState([35]);

  return (
    <Card className="p-4 bg-white rounded-2xl shadow-lg">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-xs text-gray-500 mb-1">Author of the Week</div>
          <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
          <p className="text-sm text-gray-600 truncate">{author}</p>

          <div className="mt-3 space-y-2">
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setPlaying(!playing)}
                >
                  {playing ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
              <span className="text-xs text-gray-500">Last listened</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
