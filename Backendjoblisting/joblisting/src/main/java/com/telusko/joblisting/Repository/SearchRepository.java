package com.telusko.joblisting.Repository;

import com.telusko.joblisting.Model.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findbyText(String text);
}
