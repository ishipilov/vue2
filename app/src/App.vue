<template>
  <div>
    <vue-overlay-spinner :active="waiting"/>
    <vue-xml-editor @wait="wait" :testItems="xmlEditor.testItems"/>
  </div>
</template>

<script>
import OvarlaySpinner from './components/OverlaySpinner.vue';
import XmlEditor from './components/XmlEditor.vue';
export default {
  components: { OvarlaySpinner, XmlEditor },
  data() {
    return {
      waiting: false,
      xmlEditor: {
        testItems: [
          { 
            id: 1, 
            name: 'Premium Wireless Headphones',
            category: 'Electronics',
            price: 299.99,
            inStock: true,
            specifications: {
              color: 'Black',
              weight: '1.2kg',
              dimensions: {
                width: 30,
                height: 20,
                depth: 10
              },
              features: ['Bluetooth 5.0', 'Noise Cancelling', 'USB-C', '30hr Battery'],
              connectivity: 'Wireless',
              batteryLife: '30 hours'
            },
            manufacturer: {
              name: 'TechCorp',
              country: 'USA',
              founded: 2010,
              website: 'techcorp.com'
            },
            ratings: {
              average: 4.5,
              count: 128,
              distribution: { 5: 80, 4: 30, 3: 10, 2: 5, 1: 3 }
            },
            releaseDate: '2024-01-15',
            tags: ['new', 'popular', 'premium', 'audio']
          },
          { 
            id: 2, 
            name: 'Organic Cotton T-Shirt',
            category: 'Clothing',
            price: 59.99,
            inStock: false,
            specifications: {
              size: 'L',
              color: 'Blue',
              material: 'Cotton 100%',
              care: ['Machine wash', 'Do not bleach', 'Iron low heat'],
              fit: 'Regular',
              season: 'Summer'
            },
            manufacturer: {
              name: 'FashionInc',
              country: 'Italy',
              founded: 1995,
              website: 'fashioninc.it'
            },
            ratings: {
              average: 4.2,
              count: 95,
              distribution: { 5: 45, 4: 30, 3: 12, 2: 6, 1: 2 }
            },
            releaseDate: '2024-02-20',
            tags: ['sale', 'summer', 'organic', 'sustainable']
          },
          { 
            id: 3, 
            name: 'Smart Garden Planter',
            category: 'Home & Garden',
            price: 149.50,
            inStock: true,
            specifications: {
              color: 'White',
              material: 'Plastic',
              dimensions: {
                width: 45,
                height: 35,
                depth: 25
              },
              assemblyRequired: true,
              warranty: '2 years',
              capacity: '5 liters',
              selfWatering: true
            },
            manufacturer: {
              name: 'HomeComfort',
              country: 'Germany',
              founded: 2005,
              website: 'homecomfort.de'
            },
            ratings: {
              average: 4.0,
              count: 215,
              distribution: { 5: 120, 4: 60, 3: 25, 2: 7, 1: 3 }
            },
            releaseDate: '2023-11-10',
            tags: ['durable', 'eco-friendly', 'smart', 'garden']
          },
          { 
            id: 4, 
            name: 'The Art of Programming',
            category: 'Books',
            price: 24.99,
            inStock: true,
            specifications: {
              format: 'Hardcover',
              pages: 356,
              language: 'English',
              isbn: '978-3-16-148410-0',
              edition: '2nd',
              publisher: 'TechPress'
            },
            author: {
              name: 'Jane Doe',
              nationality: 'British',
              books: ['The Journey', 'New Horizons', 'Code Mastery'],
              awards: ['Best Tech Book 2023']
            },
            publisher: {
              name: 'BookHouse',
              country: 'UK',
              established: 1988,
              website: 'bookhouse.uk'
            },
            ratings: {
              average: 4.8,
              count: 340,
              distribution: { 5: 280, 4: 45, 3: 10, 2: 3, 1: 2 }
            },
            releaseDate: '2023-09-05',
            tags: ['bestseller', 'award-winning', 'educational', 'programming']
          },
          { 
            id: 5, 
            name: 'Professional Running Shoes',
            category: 'Sports',
            price: 89.99,
            inStock: true,
            specifications: {
              brand: 'SportX',
              color: 'Red',
              size: 'M',
              material: 'Polyester 85%',
              waterproof: true,
              breathability: 'high',
              soleType: 'Rubber',
              cushioning: 'Premium'
            },
            manufacturer: {
              name: 'SportsGear',
              country: 'China',
              founded: 2012,
              website: 'sportsgear.cn'
            },
            ratings: {
              average: 4.3,
              count: 67,
              distribution: { 5: 30, 4: 25, 3: 8, 2: 3, 1: 1 }
            },
            releaseDate: '2024-03-01',
            tags: ['new', 'outdoor', 'performance', 'running']
          },
          { 
            id: 6, 
            name: 'Organic Granola Mix',
            category: 'Food & Beverage',
            price: 15.99,
            inStock: false,
            specifications: {
              weight: '500g',
              ingredients: ['Organic oats', 'Honey', 'Almonds', 'Cranberries'],
              nutritionalInfo: {
                calories: 180,
                protein: '6g',
                carbs: '28g',
                fat: '4g',
                sugar: '3g',
                fiber: '5g'
              },
              shelfLife: '18 months',
              storage: 'Cool dry place',
              allergens: ['Nuts', 'Gluten']
            },
            manufacturer: {
              name: 'OrganicLife',
              country: 'Canada',
              founded: 2018,
              website: 'organiclife.ca'
            },
            ratings: {
              average: 4.6,
              count: 178,
              distribution: { 5: 110, 4: 45, 3: 15, 2: 5, 1: 3 }
            },
            releaseDate: '2024-01-02',
            tags: ['organic', 'healthy', 'gluten-free', 'breakfast']
          },
          { 
            id: 7, 
            name: 'Professional Camera Lens',
            category: 'Photography',
            price: 599.99,
            inStock: true,
            specifications: {
              focalLength: '50mm',
              aperture: 'f/1.8',
              mountType: 'EF',
              imageStabilization: true,
              weight: '350g',
              minFocusDistance: '0.5m',
              lensElements: '7',
              groups: '5'
            },
            manufacturer: {
              name: 'OptixPro',
              country: 'Japan',
              founded: 1998,
              website: 'optixpro.jp'
            },
            ratings: {
              average: 4.9,
              count: 452,
              distribution: { 5: 400, 4: 40, 3: 8, 2: 3, 1: 1 }
            },
            releaseDate: '2023-12-15',
            tags: ['professional', 'premium', 'optics', 'camera']
          },
          { 
            id: 8, 
            name: 'Modern Desk Lamp',
            category: 'Furniture',
            price: 79.99,
            inStock: true,
            specifications: {
              color: 'Matte Black',
              material: 'Aluminum',
              bulbType: 'LED',
              wattage: '9W',
              brightness: '800 lumens',
              colorTemperature: '2700K',
              dimmable: true,
              armLength: '60cm'
            },
            manufacturer: {
              name: 'LightWorks',
              country: 'Sweden',
              founded: 2015,
              website: 'lightworks.se'
            },
            ratings: {
              average: 4.4,
              count: 189,
              distribution: { 5: 100, 4: 55, 3: 20, 2: 8, 1: 6 }
            },
            releaseDate: '2024-02-10',
            tags: ['modern', 'desk', 'energy-efficient', 'design']
          },
          { 
            id: 9, 
            name: 'Yoga Mat Premium',
            category: 'Fitness',
            price: 45.99,
            inStock: false,
            specifications: {
              size: '183cm x 68cm',
              thickness: '6mm',
              material: 'Natural Rubber',
              weight: '2.5kg',
              texture: 'Non-slip',
              color: 'Purple',
              ecoFriendly: true
            },
            manufacturer: {
              name: 'ZenFit',
              country: 'Australia',
              founded: 2020,
              website: 'zenfit.au'
            },
            ratings: {
              average: 4.7,
              count: 234,
              distribution: { 5: 150, 4: 60, 3: 15, 2: 6, 1: 3 }
            },
            releaseDate: '2023-10-20',
            tags: ['yoga', 'eco-friendly', 'non-slip', 'fitness']
          },
          { 
            id: 10, 
            name: 'Smart Home Hub',
            category: 'Smart Home',
            price: 129.99,
            inStock: true,
            specifications: {
              protocols: ['WiFi', 'Zigbee', 'Z-Wave', 'Bluetooth'],
              compatibility: ['Alexa', 'Google Home', 'Apple HomeKit'],
              maxDevices: 50,
              range: '30m',
              processor: 'Quad-core 1.2GHz',
              memory: '512MB',
              storage: '4GB'
            },
            manufacturer: {
              name: 'SmartLife',
              country: 'South Korea',
              founded: 2016,
              website: 'smartlife.kr'
            },
            ratings: {
              average: 4.1,
              count: 156,
              distribution: { 5: 80, 4: 45, 3: 20, 2: 8, 1: 3 }
            },
            releaseDate: '2024-03-15',
            tags: ['smart', 'hub', 'automation', 'compatible']
          }
        ]
      }
    }
  },
  methods: {
		wait: function (data) { this.waiting = data }
  }
}
</script>