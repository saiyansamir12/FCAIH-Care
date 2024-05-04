namespace backend.Models
{
    public class ProductCategory
    {
        public int ProductCategoryID { get; set; }
        public string Category { get; set; }
        public int ProductID { get; set; }

        public ProductCategory(int productCategoryID, string category, int productID )
        {
            ProductCategoryID = productCategoryID;
            Category = category;
            ProductID = productID;
        }
    }
}
