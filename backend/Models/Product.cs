namespace backend.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }

        public Product(int productID, string name, string description, string imageURL)
        {
            ProductID = productID;
            Name = name;
            Description = description;
            ImageURL = imageURL;
        }
    }
}