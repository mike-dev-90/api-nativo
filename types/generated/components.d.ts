import type { Schema, Struct } from '@strapi/strapi';

export interface OrderDeliveryDetails extends Struct.ComponentSchema {
  collectionName: 'components_order_delivery_details';
  info: {
    displayName: 'DeliveryDetails';
    icon: 'shoppingCart';
  };
  attributes: {
    address: Schema.Attribute.Text;
    alternativePhone: Schema.Attribute.String;
    coordinates: Schema.Attribute.Component<'shared.coordinates', true>;
    deliveryInstructions: Schema.Attribute.Text;
    firstName: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    preferredTime: Schema.Attribute.Date;
  };
}

export interface OrderOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_order_order_items';
  info: {
    description: '';
    displayName: 'OrderItem';
    icon: 'shoppingCart';
  };
  attributes: {
    notes: Schema.Attribute.Text;
    price: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    quantity: Schema.Attribute.Decimal;
    total: Schema.Attribute.Decimal;
  };
}

export interface ProductSeasonalAvailability extends Struct.ComponentSchema {
  collectionName: 'components_product_seasonal_availabilities';
  info: {
    description: '';
    displayName: 'SeasonalAvailability';
    icon: 'shoppingCart';
  };
  attributes: {
    endMonth: Schema.Attribute.Integer;
    note: Schema.Attribute.Text;
    startMonth: Schema.Attribute.Integer;
  };
}

export interface SharedCoordinates extends Struct.ComponentSchema {
  collectionName: 'components_shared_coordinates';
  info: {
    description: '';
    displayName: 'Coordinates';
    icon: '';
  };
  attributes: {
    lat: Schema.Attribute.Decimal;
    lng: Schema.Attribute.Decimal;
    updatedDelivery: Schema.Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'order.delivery-details': OrderDeliveryDetails;
      'order.order-item': OrderOrderItem;
      'product.seasonal-availability': ProductSeasonalAvailability;
      'shared.coordinates': SharedCoordinates;
    }
  }
}
