"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFont } from "@/context/fontContext"; // Assuming useFont provides font size

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { size } = useFont(); // Get dynamic font size from context

  return (
    <div className="flex items-center gap-4">
      {/* Description on the left */}
      <div
        className="text-base font-medium text-gray-700 dark:text-gray-300"
        style={{ fontSize: size }}
      >
        Toggle theme to match your preference:
      </div>

      {/* Dropdown for theme selection */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="default"
            size="lg"
            className="relative flex items-center justify-center p-3 rounded-lg shadow-md bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
            style={{ fontSize: size }}
          >
            <Sun
              className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              style={{ fontSize: size }}
            />
            <Moon
              className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              style={{ fontSize: size }}
            />
            <span className="sr-only" style={{ fontSize: size }}>
              Toggle theme
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-36">
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            style={{ fontSize: size }}
          >
            🌞 Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            style={{ fontSize: size }}
          >
            🌙 Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            style={{ fontSize: size }}
          >
            🖥️ System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
