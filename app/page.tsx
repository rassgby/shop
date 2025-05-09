'use client';
import { FeaturedProducts } from "@/components/featured-products"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50/30">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Modernisé avec animation et layout amélioré */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] bg-repeat opacity-20"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container px-4 mx-auto"
          >
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-8 text-center lg:text-left"
              >
                <div>
                  <h2 className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider text-amber-800 uppercase bg-amber-200 rounded-full">Artisanat Africain</h2>
                  <h1 className="text-4xl font-bold tracking-tight text-amber-900 md:text-5xl lg:text-6xl">
                    Élégance Africaine <span className="text-amber-600">Authentique</span>
                  </h1>
                </div>
                <p className="text-lg text-amber-800/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Découvrez notre collection exclusive de boubous traditionnels africains, confectionnés avec soin et passion par des artisans experts.
                </p>
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                  <Link href="/products">
                    <Button className="bg-amber-700 hover:bg-amber-800 text-lg py-6 px-8 shadow-lg shadow-amber-700/30 transition-all hover:shadow-xl hover:shadow-amber-700/20 hover:-translate-y-0.5">
                      Acheter Maintenant
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button
                      variant="outline"
                      className="text-amber-700 border-amber-700 hover:bg-amber-100 text-lg py-6 px-8 transition-all hover:-translate-y-0.5"
                    >
                      Voir la Collection
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent z-10"></div>
                <img
                  src="/placeholder.svg?height=600&width=700"
                  alt="Boubou africain"
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Curved divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
            </svg>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-16 text-center">
              <h6 className="text-sm font-bold tracking-wider text-amber-600 uppercase mb-2">Sélection</h6>
              <h2 className="text-3xl font-bold text-amber-900 md:text-4xl">Nos Boubous Populaires</h2>
              <div className="w-24 h-1 mx-auto mt-4 rounded bg-amber-600"></div>
            </div>
            <FeaturedProducts />
            <div className="flex justify-center mt-12">
              <Link href="/products">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  Voir tous les produits
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Notre Engagement Section */}
        <section className="py-24 bg-gradient-to-br from-amber-100 to-amber-200">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-300 rounded-full">Notre Histoire</span>
              <h2 className="mb-6 text-3xl font-bold text-amber-900 md:text-4xl">Notre Engagement envers l'Artisanat</h2>
              <p className="mb-10 text-lg leading-relaxed text-amber-800">
                Chaque boubou est une œuvre d'art fabriquée par des artisans qualifiés utilisant des techniques traditionnelles
                transmises de génération en génération. Nous sélectionnons soigneusement les tissus de la plus haute qualité
                et soutenons activement les communautés locales, préservant ainsi l'héritage culturel africain tout en créant
                des opportunités économiques durables.
              </p>
              <Button className="bg-amber-700 hover:bg-amber-800 shadow-lg shadow-amber-700/20 hover:-translate-y-0.5 transition-all">
                En Savoir Plus
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section - Modernisé */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-16 text-center">
              <h6 className="text-sm font-bold tracking-wider text-amber-600 uppercase mb-2">Explorer</h6>
              <h2 className="text-3xl font-bold text-amber-900 md:text-4xl">Nos Catégories</h2>
              <div className="w-24 h-1 mx-auto mt-4 rounded bg-amber-600"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Category Card 1 */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-96 group cursor-pointer">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Boubous pour hommes"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900 to-transparent opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center transition-all duration-300 group-hover:translate-y-0">
                  <h3 className="mb-3 text-2xl font-bold text-white">Boubous Hommes</h3>
                  <p className="mb-4 text-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Élégance et tradition pour toutes les occasions
                  </p>
                  <Button className="bg-white text-amber-900 hover:bg-amber-100 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Découvrir
                  </Button>
                </div>
              </div>
              
              {/* Category Card 2 */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-96 group cursor-pointer">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Boubous pour femmes"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900 to-transparent opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center transition-all duration-300 group-hover:translate-y-0">
                  <h3 className="mb-3 text-2xl font-bold text-white">Boubous Femmes</h3>
                  <p className="mb-4 text-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Raffinement et beauté pour chaque femme
                  </p>
                  <Button className="bg-white text-amber-900 hover:bg-amber-100 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Découvrir
                  </Button>
                </div>
              </div>
              
              {/* Category Card 3 */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-96 group cursor-pointer">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="Accessoires"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900 to-transparent opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center transition-all duration-300 group-hover:translate-y-0">
                  <h3 className="mb-3 text-2xl font-bold text-white">Accessoires</h3>
                  <p className="mb-4 text-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Compléments parfaits pour votre tenue
                  </p>
                  <Button className="bg-white text-amber-900 hover:bg-amber-100 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Découvrir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Redesigned */}
        <section className="py-24 bg-amber-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-16 text-center">
              <h6 className="text-sm font-bold tracking-wider text-amber-600 uppercase mb-2">Avis Clients</h6>
              <h2 className="text-3xl font-bold text-amber-900 md:text-4xl">Ce que disent nos clients</h2>
              <div className="w-24 h-1 mx-auto mt-4 rounded bg-amber-600"></div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mb-8 text-lg italic text-gray-700 text-center">
                  "La qualité des tissus est exceptionnelle. Mon boubou a reçu tellement de compliments lors de la fête
                  familiale! Je reviendrai certainement pour de futurs achats."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden rounded-full border-4 border-amber-200">
                    <img
                      src="/placeholder.svg?height=70&width=70"
                      alt="Client"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900">Aminata D.</h4>
                    <p className="text-sm text-gray-600">Cliente fidèle</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mb-8 text-lg italic text-gray-700 text-center">
                  "Livraison rapide et service client impeccable. Les boubous sont fidèles aux photos et aux
                  descriptions. La qualité est au rendez-vous!"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden rounded-full border-4 border-amber-200">
                    <img
                      src="/placeholder.svg?height=70&width=70"
                      alt="Client"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900">Ibrahim M.</h4>
                    <p className="text-sm text-gray-600">Nouvel acheteur</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mb-8 text-lg italic text-gray-700 text-center">
                  "J'adore les motifs et les couleurs. Ces boubous représentent parfaitement notre culture avec une
                  touche moderne. Je recommande vivement!"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden rounded-full border-4 border-amber-200">
                    <img
                      src="/placeholder.svg?height=70&width=70"
                      alt="Client"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900">Fatou S.</h4>
                    <p className="text-sm text-gray-600">Cliente régulière</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        {/* <section className="py-16 bg-amber-700 text-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
              <div className="mb-8 lg:mb-0 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">Rejoignez notre communauté</h3>
                <p className="text-amber-100">Recevez des offres exclusives et des mises à jour sur nos nouvelles collections</p>
              </div>
              <div className="flex flex-col sm:flex-row w-full max-w-md space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <Button className="bg-amber-900 hover:bg-amber-950 text-white py-3">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      
      {/* Footer - Modernisé */}
      <footer className="py-16 bg-amber-900 text-amber-100">
        <div className="container px-4 mx-auto">
          {/* <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">Motoko</h3>
              <p className="mb-6 text-amber-200/80">Votre destination pour des boubous africains authentiques et élégants confectionnés avec passion.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">Liens Rapides</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-amber-200/80 hover:text-white transition-colors">
                    À Propos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">Informations</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-amber-200/80 hover:text-white transition-colors">
                    Livraison
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-200/80 hover:text-white transition-colors">
                    Retours
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-200/80 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-200/80 hover:text-white transition-colors">
                    Conditions Générales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-200/80 hover:text-white transition-colors">
                    Politique de Confidentialité
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-amber-300 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-amber-200/80">123 Rue de la Mode, 75001 Paris, France</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-amber-300 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-amber-200/80">contact@motoko.com</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-amber-300 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-amber-200/80">+33 1 23 45 67 89</span>
                </li>
              </ul>
            </div>
          </div> */}
          
          <div className="pt-10 mt-10 border-t border-amber-800/60">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-amber-200/80">&copy; {new Date().getFullYear()} Motoko. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
)};