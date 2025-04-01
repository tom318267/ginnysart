interface ShippingRate {
  baseRate: number;
  threshold: number;
  freeShippingThreshold: number;
}

const shippingRates: { [key: string]: ShippingRate } = {
  US: {
    baseRate: 15.0,
    threshold: 200,
    freeShippingThreshold: 500,
  },
  INTERNATIONAL: {
    baseRate: 35.0,
    threshold: 200,
    freeShippingThreshold: 750,
  },
};

export const calculateShipping = (
  subtotal: number,
  country: string = "US"
): number => {
  const rate = shippingRates[country] || shippingRates.INTERNATIONAL;

  // Free shipping threshold
  if (subtotal >= rate.freeShippingThreshold) {
    return 0;
  }

  // Base shipping rate
  let shipping = rate.baseRate;

  // Additional charge for orders over threshold
  if (subtotal > rate.threshold) {
    const additionalCharge = Math.floor((subtotal - rate.threshold) / 100) * 5;
    shipping += additionalCharge;
  }

  return shipping;
};
