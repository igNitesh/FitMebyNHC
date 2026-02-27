import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
const ingredients = [
  {
    name: "Turmeric (Curcuma longa)",
    image: '/images/turmeric_ingredient_closeup.png',
    benefits: [
      "Powerful anti-inflammatory properties",
      "Supports healthy metabolism",
      "Rich in antioxidants",
    ],
    description:
      "The golden spice of Ayurveda, turmeric contains curcumin which supports fat metabolism and reduces inflammation.",
  },
  {
    name: "Green Tea Extract",
    image: '/images/green_tea_leaves_ingredient.png',
    benefits: [
      "Boosts thermogenesis",
      "Rich in EGCG catechins",
      "Natural energy enhancer",
    ],
    description:
      "Concentrated green tea provides powerful catechins that increase calorie burning and support weight management.",
  },
  {
    name: "Ashwagandha (Withania somnifera)",
    image: '/images/ashwagandha_root_ingredient.png',
    benefits: [
      "Reduces cortisol levels",
      "Manages stress eating",
      "Supports thyroid function",
    ],
    description:
      "This adaptogenic herb helps balance stress hormones that contribute to weight gain and cravings.",
  },
  {
    name: "Triphala",
    image: '/images/triphala_berries_ingredient.png',
    benefits: [
      "Gentle detoxification",
      "Improves digestion",
      "Supports gut health",
    ],
    description:
      "A traditional blend of three fruits that cleanses the digestive system and promotes optimal nutrient absorption.",
  },
  {
    name: "Mehi Dana ",   
    image: '/images/mehi_dana.png',
    benefits: [
      "Boosts metabolism",
      "Aids in fat breakdown",
      "Enhances energy levels", 
    ],    
    description:
      "Mehi Dana is known for its ability to enhance metabolic rate and support efficient fat metabolism.",

  },
  {
    name: "Ginger (Zingiber officinale)",
    image: '/images/ginger_ingredient.png',
    benefits: [  
      "Aids digestion",
      "Reduces inflammation",
      "Boosts metabolism",
    ],  
    description:
      "Ginger is a warming spice that supports digestive health and enhances metabolic function.",
  },
  {
    name: "Cinnamon (Cinnamomum verum)",
    image: '/images/cinnmon.png',
    benefits: [           
      "Regulates blood sugar",
      "Boosts metabolism",
      "Reduces cravings",
    ],  
    description:
      "Cinnamon helps stabilize blood sugar levels, reducing cravings and supporting metabolic health.",  
  },
  {
    name: "Black Pepper (Piper nigrum)",
    image: '/images/black_pepper.png',
    benefits: [
      "Enhances nutrient absorption",
      "Boosts metabolism",
      "Aids digestion",

    ],
    description:
      "Black pepper contains piperine which enhances the bioavailability of other ingredients and supports metabolic function.",
  },
  {
    name:"Lemon Extract",
    image: '/images/lemon_extract_ingredient.png',
    benefits: [
      "Rich in vitamin C",
      "Aids digestion",
      "Boosts metabolism",
    ],
    description:
      "Lemon extract provides a refreshing source of vitamin C and supports digestive health and metabolic rate.",
  },
  {
    name:"aloe vera",
    image: '/images/alovera.png',
    benefits: [
      "Supports digestion",
      "Aids detoxification",
      "Promotes gut health",
    ],
    description:
      "Aloe vera is known for its soothing effects on the digestive system and its ability to promote detoxification.",

  }
  

];

export default function IngredientsSection() {
  return (
    <section
      id="ingredients"
      className="py-20 lg:py-32 bg-card"
      data-testid="section-ingredients"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4"
            data-testid="text-ingredients-title"
          >
            Pure <span className="text-primary">Natural Ingredients</span>
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-ingredients-subtitle"
          >
            Each ingredient is carefully sourced from organic farms and
            standardized for maximum potency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ingredients.map((ingredient, index) => (
            <Card
              key={ingredient.name}
              className="overflow-hidden hover-elevate"
              data-testid={`card-ingredient-${index}`}
            >
              <CardContent className="p-0 overflow-hidden"> {/* Added overflow-hidden to keep image corners rounded */}
                <div className="flex flex-col sm:flex-row">
                  {/* Parent container for the image */}
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                    <Image
                      src={ingredient.image}
                      alt={ingredient.name}
                      // Use fill instead of fixed width/height so it fills the parent div
                      fill
                      className="object-cover"
                      // Recommended: add sizes to help Next.js optimize loading
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                  </div>

                  <div className="p-5 flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {ingredient.description}
                    </p>
                    <ul className="space-y-1">
                      {ingredient.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              GMP Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Non-GMO
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Vegan Friendly
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              No Artificial Colors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
