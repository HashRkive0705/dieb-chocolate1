import { Product, MegaBar, GiftOption } from '../types';

export const MEGA_BARS: MegaBar[] = [
  {
    id: 'mb-1',
    name: 'Classic Milk Silk',
    description: 'Deep, fudgy brownie pieces enrobed in our signature 60% dark cocoa blend with gooey salted caramel.',
    price: 175,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDduQOZ8QYc4PvW-Mwj1Up3Lljsy2SgtVLV2dV-MP_YopTnFmoLqaMfYOTw7GVc3-X1djMaU2fLaOzCXHuYPfWTlkA5eh7Llq-30K1yxFAFRNGxOOVk-cZ6m9n8s4WrQwImZgbGMW9clctcGXF3KvaGynCMPjnpOAESQ1EeQAg975BIe6dWU34eaXsQ7jC56uLhG_LkiLAWP2tyGuoZXaGhpvWhROZiH7IVmyEvUTFGDq-aXwdbZJ2_',
    imageAlt: 'Close up of a thick chocolate bar with gooey salted caramel dripping from the center',
    isBestseller: true,
    tag: 'BEST SELLER'
  },
  {
    id: 'mb-2',
    name: 'Lean Coco',
    description: 'Guilt-free single-origin 72% dark cocoa mega bar infused with raw organic nibs and zero added refined sugar.',
    price: 175,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD928dzwR2PLw3Xeg-rWEBuA6WCafduo99a_3WpnTKkHKAEkk9tutjIQCu7MYp653AY516h4oXSkwN1ekZGjKJ-2roFzXT8YFOPM1zfy-Xdhz-LC0jjZf65zjj3yGgzURrD3VIysbYu1twAVstOtgMG3eVmcqw0q9YbevI0E3f3C8iK3Ma-E4E428oatxLoDhbalKHDLYa5AVNezEyOG7dzvm66P10UAzOZYq5W5VHAAGROsJCnCkCa',
    imageAlt: 'Dark guilt-free chocolate bar with organic cocoa nibs',
    tag: 'GUILT-FREE'
  },
  {
    id: 'mb-3',
    name: 'Kunafa Brownie Bar',
    description: 'Middle Eastern crispy toasted kataifi kunafa threads and fudgy brownie pieces enrobed in signature cocoa with pistachio cream.',
    price: 175,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9NeccEqsnGzOjxLo7KjgdZmiRMvo3xy9BO4nKNJd9-OCmkSpdosjlPN5Dd8OL0ExhpvHD8zTTc6DrFRXYBkHKibAAUNT55sBepSCzOzzGcqp0sb_E3N_TYfVtJysFfz34PXImXwNZ70fFcF5llTxAxj4adPDoKAF5i2vtN37eeZ9CkmJc76iMTOXP5UWfHrwASLeKJWTNvRAnSJHkjcVKa7zekOsfNnBkTzByr0wgbYAd8KGRh-t',
    imageAlt: 'Decadent Kunafa Brownie chocolate bar filled with pistachio and crispy pastry',
    tag: 'POPULAR'
  },
  {
    id: 'mb-4',
    name: 'Tropical Crush',
    description: 'Exotic passionfruit ganache, mango puree, and toasted coconut flakes folded into smooth white cocoa.',
    price: 175,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCacNXe7PcgBIvGTxz4ApOYeYN96-k3vM4siedLlJ4zqkggOHbKs3H7hfE8uZ_sC3hV1pAdxqgqL68Tz3OkOiUHAI7KxI98Ool0k02hL2Y4mflU-C3htzO1bMakIsIWRTELY-GAbB3eg619wV7dfAuy2VzUr1pe4ALRXdhabbEgfePY27c_EFeXPvk9b3hqqPDdhaVszU6r5wRAr214MNjYwl4mkWyW6yOHEPbivfP0qameOQqjr0bw',
    imageAlt: 'Tropical fruit infused chocolate bar',
    tag: 'EXOTIC FLAVOUR'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-1',
    name: 'Mud Brownie',
    description: 'Deep, fudgy brownie pieces enrobed in our signature 60% dark cocoa blend.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB44PC--GZFHlKfpMRXwOnf11FJfPTyTrE2zd6FkeMLoZDtvlHaQDAs14qA9pg0Zk0bx7f7YXBHro_dT21RyQ3OG1aKn0nvMyfdhVJzGusLTLi-Km27S1POMbCWUaz2qE_M8hjNkhbVTkRLwQScNRpwUy-lMm1Hi8yOmCyuOpV_B691dSk8aRg89VExM5-Mx89lXO1X1lj0We461TsrHFBYgRH6r066Ml53Zj8C9-qS-CbtD87WGc9c',
    imageAlt: 'Gooey double chocolate brownie chunks embedded in a dark chocolate bar',
    category: 'Creations',
    prices: {
      miniature: 25,
      bigBar: 105,
      megaBar: 175
    },
    tags: ['Dark', 'Brownie', 'Fudgy'],
    isBestseller: true
  },
  {
    id: 'p-2',
    name: 'Ruby Rush',
    description: 'Naturally pink ruby chocolate with tangy berry notes and hibiscus petals.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtPsoGDQPJK8AzKPCyUl6A46BIWB4gx3ajBwqq9m9Kv5_AuaFJJZfxtVCmOt1imvEnGEI4Zhc_VC_BS9s2gwdQGXNMZV4C70ypy0nxsvXOK5zLZvUYvNbjjiP2p6f_G5VBGo3JDEBYKppm14fFbtIh6-QiD5q3475WEAwr-aB1HOGF1lt3HPf26_7JRGhIsjVkQM6UutYJatzXnQ3jIYjVsVFLY5CWepQ-Parnsw7UDbLVIM73g0zI',
    imageAlt: 'Vibrant pink ruby chocolate bar with dried raspberries and delicate edible flowers',
    category: 'Creations',
    prices: {
      miniature: 30,
      bigBar: 115,
      megaBar: 185
    },
    tags: ['Ruby', 'Floral', 'Fruity']
  },
  {
    id: 'p-3',
    name: 'Cookie Crush',
    description: 'Handmade cream cookies crushed into velvet milk chocolate.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7kPGvLCund0XuMD9j_V0NaRT9_BDxRH6hD8mHNvS6tHpAdfpG1Bm9ya0NEZ2H4Mdfm2DsieCnGFMPguVb8noX78tWldjGby6mTN786yhtRK4xvRC3_D1sXDDECfSIpQ1iksovgwdXe9bqCA8PmMimsYV3sO1qmI7Ppt5U8PJZ23hsfYysEy6DEjrk4GRE55m6z8mg3oPZm_ariMZIp5UoOnF7cKT7GC4D0dwWNT1IiATkBJW-9hMu',
    imageAlt: 'Milk chocolate bar packed with crushed oreo cookies and cream filling swirls',
    category: 'Creations',
    prices: {
      miniature: 25,
      bigBar: 105,
      megaBar: 175
    },
    tags: ['Milk', 'Crunchy', 'Cookies']
  },
  {
    id: 'p-4',
    name: 'Kunafa Brownie Bar',
    description: 'Middle Eastern crispy toasted kunafa pastry and fudgy brownie wrapped in velvety chocolate.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCacNXe7PcgBIvGTxz4ApOYeYN96-k3vM4siedLlJ4zqkggOHbKs3H7hfE8uZ_sC3hV1pAdxqgqL68Tz3OkOiUHAI7KxI98Ool0k02hL2Y4mflU-C3htzO1bMakIsIWRTELY-GAbB3eg619wV7dfAuy2VzUr1pe4ALRXdhabbEgfePY27c_EFeXPvk9b3hqqPDdhaVszU6r5wRAr214MNjYwl4mkWyW6yOHEPbivfP0qameOQqjr0bw',
    imageAlt: 'Gourmet Kunafa Brownie bar with flowing green pistachio cream filling',
    category: 'Creations',
    prices: {
      miniature: 25,
      bigBar: 105,
      megaBar: 175
    },
    tags: ['Kunafa', 'Brownie', 'Pistachio'],
    isBestseller: true
  },
  {
    id: 'p-5',
    name: "S'mores Bar",
    description: 'Gooey toasted marshmallow cream, honey graham cracker crunch, and velvet milk chocolate.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDduQOZ8QYc4PvW-Mwj1Up3Lljsy2SgtVLV2dV-MP_YopTnFmoLqaMfYOTw7GVc3-X1djMaU2fLaOzCXHuYPfWTlkA5eh7Llq-30K1yxFAFRNGxOOVk-cZ6m9n8s4WrQwImZgbGMW9clctcGXF3KvaGynCMPjnpOAESQ1EeQAg975BIe6dWU34eaXsQ7jC56uLhG_LkiLAWP2tyGuoZXaGhpvWhROZiH7IVmyEvUTFGDq-aXwdbZJ2_',
    imageAlt: 'Smores chocolate bar with toasted marshmallow cream and graham crunch',
    category: 'Creations',
    prices: {
      miniature: 28,
      bigBar: 110,
      megaBar: 180
    },
    tags: ['Marshmallow', 'Graham', 'Milk']
  },
  {
    id: 'p-6',
    name: 'Key Lime Bar',
    description: 'Zesty Florida key lime ganache with butter graham crust in a silky white chocolate shell.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD928dzwR2PLw3Xeg-rWEBuA6WCafduo99a_3WpnTKkHKAEkk9tutjIQCu7MYp653AY516h4oXSkwN1ekZGjKJ-2roFzXT8YFOPM1zfy-Xdhz-LC0jjZf65zjj3yGgzURrD3VIysbYu1twAVstOtgMG3eVmcqw0q9YbevI0E3f3C8iK3Ma-E4E428oatxLoDhbalKHDLYa5AVNezEyOG7dzvm66P10UAzOZYq5W5VHAAGROsJCnCkCa',
    imageAlt: 'Key Lime chocolate bar with graham crust',
    category: 'Creations',
    prices: {
      miniature: 25,
      bigBar: 105,
      megaBar: 175
    },
    tags: ['Key Lime', 'Zesty', 'Citrus']
  }
];

export const GIFT_OPTIONS: GiftOption[] = [
  {
    id: 'gift-1',
    name: 'Flower Bouquets',
    description: 'Fresh premium red roses & gold-dusted foliage to accompany your chocolates.',
    price: 599,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4Q3E-RA6uMz9YcjXWXxqXbL1BVVl-40oGBLnsVpWwzigOB8d6Js_QC0I01N5HGvFTHjBHILhxe2NsRCq0kbrzcP6hOpiZ5cQXdMDoeN6SYTxAXgePtbDukL8YnRtAmoqtmWt6kBTtN259X7l98zELc5pJ_2vJnvrwr4mCQR5qLXS8u8QtRr9PSXGBkAPocBdBCdGTSVAcmgNQgJtQpKqLipLDln2KrOONzVHzGbvR9DJBdtSQPJhG',
    imageAlt: 'Bouquet of deep red roses and gold-accented foliage'
  },
  {
    id: 'gift-2',
    name: 'Bespoke Wrapping',
    description: 'Textured handmade paper, silk satin ribbons, and a signature gold wax seal.',
    price: 150,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_VkopYe83cesouwy3TCNHynCdX56zOZoj1ZuVfQDkU6CTdeHhXDZGv4LtsjWd0Taj3sFZ2nwvhApo8_paWl_9EJL7dhIUHFcXMvOxWQDQmDl1lpr_cexk4HXK155kpdhDa92Xq6urJ-L4bOzcXiBeqg0htunfWc6byIUq99ONLVOB7D0QFlLPjuw4byHsjgL5FFbRFnuTsIBFTHOv5Yv1cy0y53aspF3aoEJ97g9thGxxghjZTQzl',
    imageAlt: 'Luxury chocolate packaging with thick silk ribbons and gold wax seal'
  }
];

export const MINIATURE_GIFT_BOX = {
  id: 'gift-box-12',
  name: '12 Miniatures Gift Box',
  description: 'An exquisite curated selection of 12 miniature bites presented in a bespoke luxury gift box.',
  price: 450,
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRGovXONKpyWS17z_elUTY6GTyE_-w7ATE_XqkTo7H-Wj-P479e4g_IukGQSd2XAVkfM86puy46hT8lFNvTot-SKjma5gpPv03qFp798xDkPCt29CBJjK8NeNKYVFos3OSXX5rcWui2X_09fmYLJCG1UjXMWsjzeX-J1PgqdqGoVd6THb03-bp-2t8Ljxa51L976b5exiWJAoDSlq1C9-FZX6Qrz3KHm6fLHAOV6jXWQQCm-1XRnPG',
  imageAlt: 'Luxurious gift box containing 12 miniature chocolate bites'
};
