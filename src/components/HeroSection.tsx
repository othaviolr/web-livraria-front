import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FeaturedBookDisplay } from "./FeaturedBookDisplay";
import { AudioPlayer } from "./AudioPlayer";

export const HeroSection = () => {
  return (
    <section className="bg-stone-100 py-12 px-6 min-h-[600px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - New & Trending */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h2 className="text-5xl font-serif text-gray-900 mb-4 leading-tight">
                New &<br />
                Trending
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Explore new worlds from authors
              </p>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Titles, author, or topics"
                  className="pl-10 py-3 text-base border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 bg-white rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Center Column - Featured Book */}
          <div className="lg:col-span-1 flex justify-center">
            <FeaturedBookDisplay />
          </div>

          {/* Right Column - Audio Player */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <AudioPlayer
                title="False Witness: A Novel"
                author="Karin Slaughter"
                coverImage="https://images.pexels.com/photos/3990897/pexels-photo-3990897.jpeg"
                isPlaying={false}
              />

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Stephen King Collection
                </h3>
                <p className="text-gray-600 text-sm mb-4">79 Books</p>
                <div className="w-20 h-26 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/32452328/pexels-photo-32452328.jpeg"
                    alt="Stephen King"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
