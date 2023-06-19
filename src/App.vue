<template>
    <div id="app" :class="{ 'app_wrapper': true }">
        <div :class="{ 'app_container': true }">
            <header :class="{ 'header': true }">
                <nav :class="{ 'nav_wrapper': true }">
                    <router-link to="/" :class="{ 'nav_item': true, 'active': $route.path === '/' }">Главная</router-link>
                    <router-link to="/create" :class="{ 'nav_item': true, 'active': $route.path === '/create' }">Создать
                        задачу</router-link>
                </nav>
            </header>

            <router-view></router-view>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'App',
};
</script>
  