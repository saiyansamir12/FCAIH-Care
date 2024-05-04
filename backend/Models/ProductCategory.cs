namespace backend.Models
{
    public class ProductCategory
    {
        public int ProductCategoryID { get; set; }
        public string Category { get; set; }

        public ProductCategory(int productCategoryID, string category )
        {
            ProductCategoryID = productCategoryID;
            Category = category;
        }
    }
}
