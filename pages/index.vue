<template>
  <div class="resume-container">
    <PersonInfo />
    <CommitGraph />
    <Introduction />
    <SocialInfo />
    <Educational />
    <SkillList />
    <ProjectExperience />
    <WorkExperience />
    <Thanks />
  </div>
</template>
<script setup lang="ts">
import PersonInfo from "../components/PersonInfo.vue";
import CommitGraph from "../components/CommitGraph.vue";
import Introduction from "../components/Introduction.vue";
import SocialInfo from "../components/SocialInfo.vue";
import Educational from "../components/Educational.vue";
import SkillList from "../components/SkillList.vue";
import ProjectExperience from "../components/ProjectExperience.vue";
import WorkExperience from "../components/WorkExperience.vue";
import Thanks from "../components/Thanks.vue";
</script>
<style lang="sass" scoped></style>
