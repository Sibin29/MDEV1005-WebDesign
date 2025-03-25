<template>
  <div>
    <h1>Blog Posts</h1>

    <!-- Search Bar -->
    <input v-model="searchQuery" type="text" placeholder="Search posts..." />

    <!-- Displaying filtered posts -->
    <div v-if="filteredPosts.length">
      <div v-for="post in filteredPosts" :key="post.id" class="post" @click="openModal(post)">
        <h2 @click="expand(post.id)">{{ post.title }}</h2>
        <div v-if="expandedPost === post.id">
            <p>Category:{{ post.category }}  <br>Author:{{ post.author }}  <br>Date:{{ post.date }}</p>
            <p><br>{{ post.content }}<br></p>
            
        </div>
      </div>
    </div>
    <div v-else>
      <p>No posts found...</p>
    </div>

    <!-- Post Modal -->
    <PostModal 
      v-if="modalVisible" 
      :showModal="modalVisible" 
      :post="selectedPost" 
      @close="closeModal" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { RouterLink } from 'vue-router';

const posts = ref([]);
const modalVisible = ref(false);
const selectedPost = ref(null);
const searchQuery = ref('');
const expandedPost = ref(null);

//Function to Expand details
function expand(postId){
  if (expandedPost.value === postId) {
    expandedPost.value = null; // Collapse the post if already expanded
  } else {
    expandedPost.value = postId; // Expand the clicked post
  }
  
}

// Load posts from JSON
onMounted(() => {
  fetch('/blog-posts.json')
    .then(response => response.json())
    .then(data => {
      posts.value = data;
    })
    .catch(err => console.error(err));
});

// Filter posts based on search query
const filteredPosts = computed(() => {
  if (!searchQuery.value) return posts.value;
  return posts.value.filter(post => 
    post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Open the modal with selected post
const openModal = (post) => {
  selectedPost.value = post;
  modalVisible.value = true;
};

// Close modal
const closeModal = () => {
  modalVisible.value = false;
};

onBeforeUnmount(() => {
  // Cleanup of resources
  posts.value = [];
  selectedPost.value = null;
  searchQuery.value = '';
});
</script>


<style scoped>



</style>