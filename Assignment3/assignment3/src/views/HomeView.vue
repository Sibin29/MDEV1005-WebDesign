<template>
  <div>
    <h1>Welcome to the Blog</h1>

    <!-- Blog Posts Grid (to display items in frid format)-->
    <div class="grid-container">
      
        
    </div>

    
  </div>
</template>



<style scoped>

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
}

.grid-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #1e1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.grid-item h2 {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.grid-item p {
  font-size: 1rem;
  color: #555;
}
</style>