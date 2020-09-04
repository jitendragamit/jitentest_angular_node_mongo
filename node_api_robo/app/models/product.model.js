/*
Author : Jitendra Gamit
Date : 4th Sep, 2020
Purpose : Mongo db schema modeling using express js and mongoose library
***/

module.exports = mongoose => {
  var ProductSchema = mongoose.Schema(
    {
      product_id: Number,
	  product_name: String,
	  cost_per_unit: Number,
	  selling_price: Number,
	  no_of_unit_available: Number
	
	},
    { timestamps: true }
  );

  ProductSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Product = mongoose.model("product", ProductSchema);
  return Product;
};
