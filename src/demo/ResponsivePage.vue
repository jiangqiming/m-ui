<template>
  <ResponsivePage
    :fullscreen="true"
    :enable-scale="true"
    :base-width="1920"
    :base-height="1080"
    :scale-mode="'fit'"
    :background-color="'#0a1e3d'"
  >
    <div class="w-full h-full p-5 bg-gradient-to-br from-[#0a1e3d] to-[#1a3a5c] text-white font-['Microsoft_YaHei',Arial,sans-serif] flex flex-col">
      <!-- 顶部标题和统计 -->
      <div class="h-[124px] flex justify-between items-center mb-5 px-10 py-5 bg-[rgba(15,71,153,0.3)] rounded-lg border border-[rgba(66,133,244,0.3)]">
        <h1 class="text-4xl font-bold text-[#E6F7FF] m-0 drop-shadow-[0_0_10px_rgba(66,133,244,0.5)]">重庆市技能人才评价</h1>
        <div class="flex gap-[60px]">
          <div class="flex items-center gap-5">
            <div class="w-[60px] h-[60px] bg-[rgba(66,133,244,0.2)] rounded-lg flex items-center justify-center">
              <div class="w-10 h-10 bg-[rgba(66,133,244,0.6)] rounded"></div>
            </div>
            <div>
              <div class="text-sm text-[#B0D4FF] mb-2">技能人才评价人次</div>
              <div class="text-[32px] font-bold text-[#E6F7FF] leading-none">880</div>
              <div class="text-sm text-[#B0D4FF] mt-1">万人次</div>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <div class="w-[60px] h-[60px] bg-[rgba(66,133,244,0.2)] rounded-lg flex items-center justify-center">
              <div class="w-10 h-10 bg-[rgba(66,133,244,0.6)] rounded"></div>
            </div>
            <div>
              <div class="text-sm text-[#B0D4FF] mb-2">技能人才获证率</div>
              <div class="text-[32px] font-bold text-[#E6F7FF] leading-none">86.2</div>
              <div class="text-sm text-[#B0D4FF] mt-1">%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 主要内容区域 -->
      <div class="flex-1 grid grid-cols-[420px_1fr_420px] gap-5 mb-5">
        <!-- 左侧面板 -->
        <div>
          <!-- 技能人才评价 -->
          <div class="bg-[rgba(15,71,153,0.2)] rounded-lg border border-[rgba(66,133,244,0.3)] p-5 mb-5">
            <div class="flex justify-between items-center mb-5 pb-2.5 border-b border-[rgba(66,133,244,0.3)]">
              <h2 class="text-lg font-bold text-[#E6F7FF] m-0">技能人才评价</h2>
              <a href="#" class="text-xs text-[#B0D4FF] no-underline hover:text-[#E6F7FF]">查看更多 ></a>
            </div>
            
            <div class="flex gap-5 mb-5">
              <div class="flex-1 flex items-center gap-3 p-4 bg-[rgba(15,71,153,0.3)] rounded-md">
                <div class="w-10 h-10 bg-[rgba(66,133,244,0.2)] rounded-md flex items-center justify-center">
                  <div class="w-7 h-7 bg-[rgba(66,133,244,0.6)] rounded"></div>
                </div>
                <div class="flex-1">
                  <div class="text-xs text-[#B0D4FF] mb-1">评价</div>
                  <div class="text-2xl font-bold text-[#E6F7FF] leading-none">283288</div>
                  <div class="text-xs text-[#B0D4FF] mt-0.5">人次</div>
                </div>
              </div>
              <div class="flex-1 flex items-center gap-3 p-4 bg-[rgba(15,71,153,0.3)] rounded-md">
                <div class="w-10 h-10 bg-[rgba(66,133,244,0.2)] rounded-md flex items-center justify-center">
                  <div class="w-7 h-7 bg-[rgba(66,133,244,0.6)] rounded"></div>
                </div>
                <div class="flex-1">
                  <div class="text-xs text-[#B0D4FF] mb-1">获证率</div>
                  <div class="text-2xl font-bold text-[#E6F7FF] leading-none">85.5</div>
                  <div class="text-xs text-[#B0D4FF] mt-0.5">%</div>
                  <div class="flex items-center justify-center mt-2">
                    <svg class="w-[50px] h-[50px]" width="50" height="50">
                      <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke="rgba(66,133,244,0.3)"
                        stroke-width="4"
                      />
                      <circle
                        class="transition-[stroke-dashoffset] duration-300"
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke="#52C41A"
                        stroke-width="4"
                        stroke-dasharray="125.6"
                        :stroke-dashoffset="125.6 * (1 - 0.855)"
                        transform="rotate(-90 25 25)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="mb-4">
                <div class="text-xs text-[#B0D4FF] mb-2">高级工及以上获证</div>
                <div class="h-8 bg-[rgba(15,71,153,0.3)] rounded relative overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-[#1890FF] to-[#00E5FF] rounded flex items-center justify-end pr-2.5 min-w-[120px]" style="width: 23.6%">
                    <span class="text-sm font-bold text-[#E6F7FF] mr-1">66939</span>
                    <span class="text-xs text-[#B0D4FF]">人次</span>
                  </div>
                </div>
              </div>
              <div>
                <div class="text-xs text-[#B0D4FF] mb-2">技师及以上获证</div>
                <div class="h-8 bg-[rgba(15,71,153,0.3)] rounded relative overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-[#1890FF] to-[#00E5FF] rounded flex items-center justify-end pr-2.5 min-w-[120px]" style="width: 1.5%">
                    <span class="text-sm font-bold text-[#E6F7FF] mr-1">4379</span>
                    <span class="text-xs text-[#B0D4FF]">人次</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-5 p-4 bg-[rgba(15,71,153,0.3)] rounded-md">
              <div class="text-sm text-[#E6F7FF] mb-3 font-bold">现代制造业 (33618)</div>
              <div class="grid grid-cols-2 gap-2.5">
                <div class="p-3 bg-[rgba(15,71,153,0.4)] rounded text-center border border-[rgba(66,133,244,0.3)]">
                  <div class="text-xl font-bold text-[#E6F7FF] mb-1">3</div>
                  <div class="text-[11px] text-[#B0D4FF]">27个职业</div>
                </div>
                <div class="p-3 bg-[rgba(15,71,153,0.4)] rounded text-center border border-[rgba(66,133,244,0.3)]">
                  <div class="text-xl font-bold text-[#E6F7FF] mb-1">3</div>
                  <div class="text-[11px] text-[#B0D4FF]">23个职业</div>
                </div>
                <div class="p-3 bg-[rgba(15,71,153,0.4)] rounded text-center border border-[rgba(66,133,244,0.3)]">
                  <div class="text-xl font-bold text-[#E6F7FF] mb-1">6</div>
                  <div class="text-[11px] text-[#B0D4FF]">65个职业</div>
                </div>
                <div class="p-3 bg-[rgba(15,71,153,0.4)] rounded text-center border border-[rgba(66,133,244,0.3)]">
                  <div class="text-xl font-bold text-[#E6F7FF] mb-1">18</div>
                  <div class="text-[11px] text-[#B0D4FF]">75个职业</div>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="text-sm text-[#E6F7FF] mb-2.5 font-bold">产业集群名称</div>
              <table class="w-full text-xs border-collapse">
                <thead>
                  <tr class="bg-[rgba(15,71,153,0.4)]">
                    <th class="p-2 text-left text-[#E6F7FF] font-bold border-b border-[rgba(66,133,244,0.3)]">序号</th>
                    <th class="p-2 text-left text-[#E6F7FF] font-bold border-b border-[rgba(66,133,244,0.3)]">产业集群</th>
                    <th class="p-2 text-left text-[#E6F7FF] font-bold border-b border-[rgba(66,133,244,0.3)]">人次</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-[rgba(66,133,244,0.2)] hover:bg-[rgba(15,71,153,0.3)]">
                    <td class="p-2 text-[#B0D4FF]">1</td>
                    <td class="p-2 text-[#B0D4FF]">卫星互联网</td>
                    <td class="p-2 text-[#B0D4FF]">25,359</td>
                  </tr>
                  <tr class="border-b border-[rgba(66,133,244,0.2)] hover:bg-[rgba(15,71,153,0.3)]">
                    <td class="p-2 text-[#B0D4FF]">2</td>
                    <td class="p-2 text-[#B0D4FF]">AI及机器人</td>
                    <td class="p-2 text-[#B0D4FF]">16,535</td>
                  </tr>
                  <tr class="border-b border-[rgba(66,133,244,0.2)] hover:bg-[rgba(15,71,153,0.3)]">
                    <td class="p-2 text-[#B0D4FF]">3</td>
                    <td class="p-2 text-[#B0D4FF]">智能网联新能源汽车</td>
                    <td class="p-2 text-[#B0D4FF]">15,208</td>
                  </tr>
                  <tr class="border-b border-[rgba(66,133,244,0.2)] hover:bg-[rgba(15,71,153,0.3)]">
                    <td class="p-2 text-[#B0D4FF]">4</td>
                    <td class="p-2 text-[#B0D4FF]">新型储能</td>
                    <td class="p-2 text-[#B0D4FF]">3,948</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 中间地图 -->
        <div>
          <div class="bg-[rgba(15,71,153,0.2)] rounded-lg border border-[rgba(66,133,244,0.3)] p-5 mb-5">
            <div class="flex justify-between items-center mb-5 pb-2.5 border-b border-[rgba(66,133,244,0.3)]">
              <h2 class="text-lg font-bold text-[#E6F7FF] m-0">区县评价分布</h2>
              <a href="#" class="text-xs text-[#B0D4FF] no-underline hover:text-[#E6F7FF]">查看更多 ></a>
            </div>
            <div class="h-[600px] bg-[rgba(15,71,153,0.2)] rounded-md overflow-hidden">
              <ChartMapCq
                :data="mapData"
                :height="600"
                :show-legend="true"
                :legend-position="'right'"
                :legend-title="'序时进度'"
                :show-label="true"
                :label-style="{ color: '#ffffff', fontSize: 10, fontWeight: 'normal' }"
                :area-style="{ areaColor: '#5b9bd5', borderColor: '#fff', borderWidth: 1 }"
                :emphasis="{ areaColor: '#ffff00', borderColor: '#fff', borderWidth: 2 }"
                :enable-drill-down="true"
                :district-geo-json-map="districtGeoJsonMap"
              />
            </div>
          </div>
        </div>

        <!-- 右侧面板 -->
        <div>
          <!-- 技能技术开发 -->
          <div class="bg-[rgba(15,71,153,0.2)] rounded-lg border border-[rgba(66,133,244,0.3)] p-5 mb-5">
            <div class="flex justify-between items-center mb-5 pb-2.5 border-b border-[rgba(66,133,244,0.3)]">
              <h2 class="text-lg font-bold text-[#E6F7FF] m-0">技能技术开发</h2>
              <a href="#" class="text-xs text-[#B0D4FF] no-underline hover:text-[#E6F7FF]">查看更多 ></a>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-5">
              <div class="flex items-center gap-3 p-4 bg-[rgba(15,71,153,0.3)] rounded-md">
                <div class="w-10 h-10 bg-[rgba(66,133,244,0.2)] rounded-md flex items-center justify-center">
                  <div class="w-7 h-7 bg-[rgba(66,133,244,0.6)] rounded"></div>
                </div>
                <div class="flex-1">
                  <div class="text-xs text-[#B0D4FF] mb-1">新职业</div>
                  <div class="text-2xl font-bold text-[#E6F7FF] leading-none">110</div>
                  <div class="text-xs text-[#B0D4FF] mt-0.5">个</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-4 bg-[rgba(15,71,153,0.3)] rounded-md">
                <div class="w-10 h-10 bg-[rgba(66,133,244,0.2)] rounded-md flex items-center justify-center">
                  <div class="w-7 h-7 bg-[rgba(66,133,244,0.6)] rounded"></div>
                </div>
                <div class="flex-1">
                  <div class="text-xs text-[#B0D4FF] mb-1">专项</div>
                  <div class="text-2xl font-bold text-[#E6F7FF] leading-none">284</div>
                  <div class="text-xs text-[#B0D4FF] mt-0.5">个</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 质量监管 -->
          <div class="bg-[rgba(15,71,153,0.2)] rounded-lg border border-[rgba(66,133,244,0.3)] p-5 mb-5">
            <div class="flex justify-between items-center mb-5 pb-2.5 border-b border-[rgba(66,133,244,0.3)]">
              <h2 class="text-lg font-bold text-[#E6F7FF] m-0">质量监管</h2>
              <a href="#" class="text-xs text-[#B0D4FF] no-underline hover:text-[#E6F7FF]">查看更多 ></a>
            </div>
            <div class="grid grid-cols-3 gap-3 mb-5">
              <div class="flex flex-col items-center gap-2 p-4 bg-[rgba(15,71,153,0.3)] rounded-md text-center">
                <div class="w-10 h-10 bg-[rgba(66,133,244,0.2)] rounded-md flex items-center justify-center">
                  <div class="w-7 h-7 bg-[rgba(66,133,244,0.6)] rounded"></div>
                </div>
                <div>
                  <div class="text-[11px] text-[#B0D4FF] mb-1">队伍建设</div>
                  <div class="text-xl font-bold text-[#E6F7FF] leading-none">9369</div>
                  <div class="text-[11px] text-[#B0D4FF] mt-0.5">人次</div>
                </div>
              </div>
              <div class="flex flex-col items-center gap-2 p-4 bg-[rgba(15,71,153,0.3)] rounded-md text-center">
                <div class="w-10 h-10 bg-[rgba(66,133,244,0.2)] rounded-md flex items-center justify-center">
                  <div class="w-7 h-7 bg-[rgba(66,133,244,0.6)] rounded"></div>
                </div>
                <div>
                  <div class="text-[11px] text-[#B0D4FF] mb-1">人员派遣</div>
                  <div class="text-xl font-bold text-[#E6F7FF] leading-none">1472</div>
                  <div class="text-[11px] text-[#B0D4FF] mt-0.5">人次</div>
                </div>
              </div>
              <div class="flex flex-col items-center gap-2 p-4 bg-[rgba(15,71,153,0.3)] rounded-md text-center">
                <div class="w-10 h-10 bg-[rgba(66,133,244,0.2)] rounded-md flex items-center justify-center">
                  <div class="w-7 h-7 bg-[rgba(66,133,244,0.6)] rounded"></div>
                </div>
                <div>
                  <div class="text-[11px] text-[#B0D4FF] mb-1">质量督导</div>
                  <div class="text-xl font-bold text-[#E6F7FF] leading-none">387</div>
                  <div class="text-[11px] text-[#B0D4FF] mt-0.5">家</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 技能竞赛 -->
          <div class="bg-[rgba(15,71,153,0.2)] rounded-lg border border-[rgba(66,133,244,0.3)] p-5 mb-5">
            <div class="flex justify-between items-center mb-5 pb-2.5 border-b border-[rgba(66,133,244,0.3)]">
              <h2 class="text-lg font-bold text-[#E6F7FF] m-0">技能竞赛</h2>
              <a href="#" class="text-xs text-[#B0D4FF] no-underline hover:text-[#E6F7FF]">查看更多 ></a>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-5">
              <div class="flex items-center gap-3 p-4 bg-[rgba(15,71,153,0.3)] rounded-md">
                <div class="w-10 h-10 bg-[rgba(66,133,244,0.2)] rounded-md flex items-center justify-center">
                  <div class="w-7 h-7 bg-[rgba(66,133,244,0.6)] rounded"></div>
                </div>
                <div class="flex-1">
                  <div class="text-[11px] text-[#B0D4FF] mb-1 leading-snug">第48届世赛在渝中国集训基地</div>
                  <div class="text-xl font-bold text-[#E6F7FF] leading-none">23</div>
                  <div class="text-[11px] text-[#B0D4FF] mt-0.5">个</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-4 bg-[rgba(15,71,153,0.3)] rounded-md">
                <div class="w-10 h-10 bg-[rgba(66,133,244,0.2)] rounded-md flex items-center justify-center">
                  <div class="w-7 h-7 bg-[rgba(66,133,244,0.6)] rounded"></div>
                </div>
                <div class="flex-1">
                  <div class="text-[11px] text-[#B0D4FF] mb-1 leading-snug">市级竞赛基地</div>
                  <div class="text-xl font-bold text-[#E6F7FF] leading-none">106</div>
                  <div class="text-[11px] text-[#B0D4FF] mt-0.5">个</div>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between items-center p-3 bg-[rgba(15,71,153,0.3)] rounded-md mb-2.5">
                <div class="text-xs text-[#E6F7FF] flex-1">第八届中国·重庆职业技...</div>
                <div class="text-[11px] text-[#B0D4FF] mx-4">5月21日-5月22日</div>
                <div class="text-[11px] text-[#52C41A] px-2 py-1 bg-[rgba(82,196,26,0.2)] rounded">已举办</div>
              </div>
              <div class="flex justify-between items-center p-3 bg-[rgba(15,71,153,0.3)] rounded-md mb-2.5">
                <div class="text-xs text-[#E6F7FF] flex-1">第三全国技能大赛</div>
                <div class="text-[11px] text-[#B0D4FF] mx-4">9月21日-9月23日</div>
                <div class="text-[11px] text-[#52C41A] px-2 py-1 bg-[rgba(82,196,26,0.2)] rounded">已举办</div>
              </div>
              <div class="flex justify-between items-center p-3 bg-[rgba(15,71,153,0.3)] rounded-md mb-2.5">
                <div class="text-xs text-[#E6F7FF] flex-1">2025年机械工业"一带一..."</div>
                <div class="text-[11px] text-[#B0D4FF] mx-4">11月-12月</div>
                <div class="text-[11px] text-[#52C41A] px-2 py-1 bg-[rgba(82,196,26,0.2)] rounded">已举办</div>
              </div>
            </div>

            <div>
              <div class="flex items-center gap-2.5 mb-3">
                <div class="text-xs text-[#B0D4FF] w-[60px]">市级行...</div>
                <div class="flex-1 h-5 bg-[rgba(15,71,153,0.3)] rounded-[10px] overflow-hidden relative">
                  <div class="h-full bg-gradient-to-r from-[#1890FF] to-[#00E5FF] rounded-[10px] transition-[width] duration-300" style="width: 96.7%"></div>
                </div>
                <div class="text-xs text-[#E6F7FF] w-[50px] text-right">29/30</div>
              </div>
              <div class="flex items-center gap-2.5 mb-3">
                <div class="text-xs text-[#B0D4FF] w-[60px]">区县级...</div>
                <div class="flex-1 h-5 bg-[rgba(15,71,153,0.3)] rounded-[10px] overflow-hidden relative">
                  <div class="h-full bg-gradient-to-r from-[#1890FF] to-[#00E5FF] rounded-[10px] transition-[width] duration-300" style="width: 100%"></div>
                </div>
                <div class="text-xs text-[#E6F7FF] w-[50px] text-right">22/22</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </ResponsivePage>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import ResponsivePage from '../components/ResponsivePage/index.vue'
// @ts-ignore
import ChartBar3D from '../components/ChartBar3D/index.vue'
// @ts-ignore
import ChartMapCq from '../components/ChartMapCq/index.vue'
// @ts-ignore
import ScrollBox from '../components/ScrollBox/index.vue'
// @ts-ignore
import chongqingDistrictGeoJson from '../assets/geo/chongqing-district.json'

// 地图数据
const mapData = ref([
  { name: '两江新区', value: 65 },
  { name: '万州区', value: 55 },
  { name: '黔江区', value: 45 },
  { name: '涪陵区', value: 60 },
  { name: '渝中区', value: 70 },
  { name: '大渡口区', value: 50 },
  { name: '江北区', value: 65 },
  { name: '沙坪坝区', value: 60 },
  { name: '九龙坡区', value: 55 },
  { name: '南岸区', value: 58 },
  { name: '北碚区', value: 52 },
  { name: '綦江区', value: 48 },
  { name: '大足区', value: 45 },
  { name: '渝北区', value: 68 },
  { name: '巴南区', value: 50 },
  { name: '长寿区', value: 42 },
  { name: '江津区', value: 55 },
  { name: '合川区', value: 48 },
  { name: '永川区', value: 52 },
  { name: '南川区', value: 40 },
  { name: '璧山区', value: 45 },
  { name: '铜梁区', value: 43 },
  { name: '潼南区', value: 38 },
  { name: '荣昌区', value: 42 },
  { name: '梁平区', value: 35 },
  { name: '城口县', value: 25 },
  { name: '丰都县', value: 30 },
  { name: '垫江县', value: 32 },
  { name: '武隆区', value: 28 },
  { name: '忠县', value: 33 },
  { name: '开州区', value: 40 },
  { name: '云阳县', value: 28 },
  { name: '奉节县', value: 25 },
  { name: '巫山县', value: 22 },
  { name: '巫溪县', value: 20 },
  { name: '石柱县', value: 30 },
  { name: '秀山县', value: 25 },
  { name: '酉阳县', value: 22 },
  { name: '彭水县', value: 25 },
  { name: '万盛经开区', value: 35 },
  { name: '高新区', value: 65 },
])

// 区县GeoJSON数据映射（包含镇街边界）
const districtGeoJsonMap = chongqingDistrictGeoJson as Record<string, any>

// 区县评价数据
const districtData = ref([
  { name: '两江新区', levelCert: 48481, seniorWorker: 16688, technician: 1012, specialAssessment: 10672 },
  { name: '万州区', levelCert: 7382, seniorWorker: 2713, technician: 63, specialAssessment: 1346 },
  { name: '黔江区', levelCert: 1934, seniorWorker: 247, technician: 2, specialAssessment: 727 },
  { name: '涪陵区', levelCert: 8657, seniorWorker: 2448, technician: 155, specialAssessment: 289 },
  { name: '渝中区', levelCert: 11802, seniorWorker: 2792, technician: 326, specialAssessment: 887 },
  { name: '大渡口区', levelCert: 3421, seniorWorker: 1234, technician: 45, specialAssessment: 567 },
  { name: '江北区', levelCert: 5678, seniorWorker: 2134, technician: 123, specialAssessment: 890 },
  { name: '沙坪坝区', levelCert: 7890, seniorWorker: 3456, technician: 234, specialAssessment: 1234 },
  { name: '九龙坡区', levelCert: 6543, seniorWorker: 2345, technician: 156, specialAssessment: 987 },
  { name: '南岸区', levelCert: 4321, seniorWorker: 1567, technician: 89, specialAssessment: 654 },
  { name: '北碚区', levelCert: 3456, seniorWorker: 1234, technician: 67, specialAssessment: 543 },
  { name: '綦江区', levelCert: 2345, seniorWorker: 890, technician: 34, specialAssessment: 432 },
  { name: '大足区', levelCert: 4567, seniorWorker: 1678, technician: 78, specialAssessment: 765 },
  { name: '渝北区', levelCert: 6789, seniorWorker: 2567, technician: 145, specialAssessment: 1098 },
  { name: '巴南区', levelCert: 5432, seniorWorker: 1987, technician: 98, specialAssessment: 876 },
])
</script>