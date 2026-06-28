package com.ecommerce.project.repositories;

import com.ecommerce.project.model.Category;
import com.ecommerce.project.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product , Long> {
    List<Product> findByCategoryOrderByPriceAsc(Category category);

    // it automatically generate sql and find the list of product
    List<Product> findByProductNameLikeIgnoreCase(String keyword);
}
