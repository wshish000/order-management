<template>
    <div class="fillcontain">
        <div class="fillcontainer">
            <el-row>
                <el-col :span="24">
                    <add-chart></add-chart>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <sub-chart></sub-chart>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import AddChart from "./echarts/addChart";
    import SubChart from "./echarts/subChart";
    export default {
        name: "punishChart",
        components: {
            AddChart,
            SubChart,
        },
        data() {
            return {};
        },
        computed: {},
        methods: {},
    };
</script>

<style scoped></style>
