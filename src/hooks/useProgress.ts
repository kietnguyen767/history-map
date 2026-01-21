// src/hooks/useProgress.ts
"use client";

import { useState, useEffect } from "react";
import { ERAS_DATA } from "@/lib/data";

export function useProgress() {
  const [completedStories, setCompletedStories] = useState<string[]>([]);
  const [isFullyUnlocked, setIsFullyUnlocked] = useState(false);

  // 1. Load dữ liệu
  useEffect(() => {
    const saved = localStorage.getItem("history_app_progress");
    if (saved) {
      setCompletedStories(JSON.parse(saved));
    }
  }, []);

  // 2. Đánh dấu hoàn thành
  const markAsCompleted = (storyId: string) => {
    if (!completedStories.includes(storyId)) {
      const newProgress = [...completedStories, storyId];
      setCompletedStories(newProgress);
      localStorage.setItem("history_app_progress", JSON.stringify(newProgress));
    }
  };

  // 3. Reset toàn bộ (MỚI THÊM)
  const resetProgress = () => {
    if (confirm("Bạn có chắc muốn xóa toàn bộ ký ức và bắt đầu lại hành trình không?")) {
      setCompletedStories([]);
      setIsFullyUnlocked(false);
      localStorage.removeItem("history_app_progress");
    }
  };

  // 4. Kiểm tra mở khóa toàn bộ
  useEffect(() => {
    let totalStories = 0;
    const allStoryIds: string[] = [];

    Object.keys(ERAS_DATA).forEach((key) => {
      if (key !== "hidden") {
        ERAS_DATA[key].stories.forEach((s: any) => {
          totalStories++;
          allStoryIds.push(s.id);
        });
      }
    });

    const allDone = totalStories > 0 && allStoryIds.every((id) => completedStories.includes(id));
    setIsFullyUnlocked(allDone);
  }, [completedStories]);

  return { completedStories, markAsCompleted, isFullyUnlocked, resetProgress };
}