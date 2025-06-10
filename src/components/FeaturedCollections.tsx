import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const FeaturedCollections = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Dark Romance Collection */}
          <div className="lg:col-span-1">
            <Card className="bg-black text-white overflow-hidden relative h-96">
              <CardContent className="p-0 h-full flex flex-col justify-between">
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex gap-4 mb-4">
                    <div className="w-16 h-20 bg-red-800 rounded-sm flex items-center justify-center">
                      <span className="text-red-400 text-xs font-bold">DF</span>
                    </div>
                    <div className="w-16 h-20 bg-gray-800 rounded-sm flex items-center justify-center">
                      <span className="text-gray-400 text-xs font-bold">
                        NIGHT
                      </span>
                    </div>
                    <div className="w-16 h-20 bg-red-900 rounded-sm flex items-center justify-center">
                      <span className="text-red-300 text-xs font-bold">
                        XIII
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif mb-2">Dark Romance</h3>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90">
                  <span className="text-sm text-gray-400 tracking-wider">
                    Autor do ano
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Noah Sebastian Collection */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-amber-400 to-amber-600 overflow-hidden relative h-96">
              <CardContent className="p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Noah Sebastian</h3>
                  <h4 className="text-lg font-semibold mb-1">Collection</h4>
                  <p className="text-amber-100">79 Livros</p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://images.pexels.com/photos/20837032/pexels-photo-20837032.jpeg"
                    alt="Noah Sebastian"
                    className="w-32 h-40 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Literatura Coreana */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-slate-600 to-slate-800 overflow-hidden relative h-96">
              <CardContent className="p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Literatura Coreana
                  </h3>
                  <p className="text-slate-300">Descoberta</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <img
                    src="https://images.pexels.com/photos/32452328/pexels-photo-32452328.jpeg"
                    alt="Korean Literature 1"
                    className="w-full h-20 object-cover rounded"
                  />
                  <img
                    src="https://images.pexels.com/photos/4165581/pexels-photo-4165581.jpeg"
                    alt="Korean Literature 2"
                    className="w-full h-20 object-cover rounded"
                  />
                  <img
                    src="https://images.pexels.com/photos/5600077/pexels-photo-5600077.jpeg"
                    alt="Korean Literature 3"
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
