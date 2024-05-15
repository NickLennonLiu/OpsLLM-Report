---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: OpsLLM 周报 评测组
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---
# OpsLLM 周报 评测组

## 2024-05-15

---

# 本周工作

- 问答评估论文助攻

- 腾讯日志分析

- 评测榜单更新

---
layout: image-right
image: paper.png
backgroundSize: contain
---

# 问答评估论文助攻

- ✅ ARES Baseline实验
- ✅ Introduction
- [ ] Evaluation 1) ~ 4)
  - ✅ Dataset
  - ✏️ Baselines
  - [ ] Foundation Model
  - [ ] Evaluation Metric

今晚前完成

---

# 腾讯日志分析

### 进展

- CI数据集和评测方案制定
  - 主要工作：针对goodcase的模型输出提取对解决工单有用的关键词
  - 目前提取出的关键词存在 **数量多且宽泛** 的问题 -> 进一步调整prompt
  - 打分的维度
    - 回答格式、作答顺序、长度、扣分项
  
### 潜在问题

- 项目验收指标中需要体现有某方面的提升，但目前评测方案依赖于goodcase，若只靠关键词比对进行打分，模型最好情况只能做到性能不下降
  - 打分指标需要针对日志分析的优化方案进行对应设计
  - 选择适当的Baseline -> gpt4, hunyuan, 开源模型 etc.
  - 探索针对badcase的优化方式

---

# OpsEval榜单更新

- [OpsEval官网](https://opseval.cstcloud.cn/content/home)[^1]

- [HuggingFace Leaderboard](https://huggingface.co/spaces/Junetheriver/OpsEval)

- 更新了Meta-LLaMA-3、Qwen1.5等模型的结果

<img src="/lb.png" height="500" width="400" />

[^1]: 需求已提交到腾讯文档
