<template>
  <div class="home">
    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">

      <h1>{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
    </div>

    <div :class="{isCN:isCN}" v-if="data.features && data.features.length">
      <div v-for="(feature, index) in data.features" :key="index">
        <h1>{{feature.typeTitle}}</h1>
        <div class="features">
          <div class="feature" v-for="(child, i) in feature.children" :key="i">
            <a :href="child.link">
              <h2>{{ child.title }}</h2>
              <p>{{ child.details }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Content custom/>
    <div class="footer" v-if="data.footer">{{ data.footer }}</div>
  </div>
</template>

<script>
import NavLink from '@default-theme/NavLink.vue'
export default {
  components: { NavLink },
  computed: {
    isCN() {
      return this.$lang === 'zh-CN'
    },
    data() {
      return this.$page.frontmatter
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },
  methods: {
    clickCoding(tag) {
      ga('send', 'click', 'e.coding', 'Action', tag)
    }
  }
}
</script>

<style lang="stylus">
@import '~@default-theme/styles/config.styl';

html, body {
  min-height: 100vh;
  background: #f6f6f6;
}

.home {
  padding: $navbarHeight 2rem 0;
  max-width: 960px;
  margin: 0px auto;

  .hero {
    text-align: center;

    >img {
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .feature {
    width: 22%;
    box-sizing: border-box;
    height:200px;
    overflow:hidden;

    h1 {
      width: 140px;
      padding: 11px 15px;
      margin: 0;
      font-size: 18px;
      background-color: #45B6F7;
      color: white;
      font-weight: normal;
      margin-left: 10px;
    }

    a {
      display: block;
      margin: 5px;
      background-color: #fff;
      padding: 5px;
      height:100%;
      h2 {
        margin-bottom: 5px;
        font-size: 16px;
        color: #45B6F7;
        font-weight: 500;
        border-bottom: none;
        padding-bottom: 0;
        color: lighten($textColor, 10%);
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-align: center;
      }

      p {
        padding: 0 5px;
        color: lighten($textColor, 25%);
        font-size: 14px;
        text-align center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      // flex-direction: column;
      // align-items:stretch;
    }

    .feature {
      width: 33%;
      min-width: 100px;
      padding: 0;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      width: 45%;
      min-width: 100px;
      padding: 0;
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
