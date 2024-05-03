using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    public class ProductCategoryController : ControllerBase
    {
        private readonly IListRepository<ProductCategory> _psRepository;

        public ProductCategoryController(IListRepository<ProductCategory> productCategoryRepo)
        {
            _psRepository = productCategoryRepo;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<ProductCategory> productCategorys = _psRepository.GetAll();
            return Ok(productCategorys);
        }

        [HttpGet("{productId}")]
        public IActionResult Get(int productId)
        {
            var productCategorys = _psRepository.GetById(productId);
            if (productCategorys == null)
            {
                return NotFound();
            }
            return Ok(productCategorys);
        }

        [HttpGet("{id}/size")]
        public IActionResult GetproductCategoryById(int id)
        {
            var productCategorys = _psRepository.GetObjById(id);
            if (productCategorys == null)
            {
                return NotFound();
            }
            return Ok(productCategorys);
        }

        [HttpPost]
        public IActionResult Post(ProductCategory newproductCategory)
        {
            bool added = _psRepository.Add(newproductCategory);
            if (!added)
            {
                return BadRequest("Failed to add Product Category");
            }

            return Ok();
        }

        [HttpPut("{productCategoryId}")]
        public IActionResult Put(ProductCategory updatedproductCategory)
        {
            bool updated = _psRepository.Update(updatedproductCategory);
            if (updated)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpDelete("{productCategoryId}")]
        public IActionResult Delete(int productCategoryId)
        {
            bool deleted = _psRepository.Delete(productCategoryId);
            if (deleted)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}
