namespace backend.Models
{
    public class ProductCategory
    {
        public int ProductCategoryID { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public int ProductID { get; set; }

        public ProductCategory(int productCategoryID, string category, decimal price, int quantity, int productID )
        {
            ProductCategoryID = productCategoryID;
            Category = category;
            Price = price;
            Quantity = quantity;
            ProductID = productID;
        }
    }
}
