namespace backend.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImageURL { get; set; }
        public int ProductCategoryID { get; set; } 

        public Product(int productID, string name, string description, string imageURL, int productCategoryID, decimal price)
        {
            ProductID = productID;
            Name = name;
            Description = description;
            Price = price;
            ImageURL = imageURL;
            ProductCategoryID = productCategoryID; 
        }
    }
}