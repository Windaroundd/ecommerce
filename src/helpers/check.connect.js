"use strict";

import mongoose from "mongoose";
import os from "os";
import process from "process";

const _SECOND = 5000;

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    const maxConnections = numCores * 5;

    console.log(`Memory Usage: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.warn(`Warning: High number of connections (${numConnection})`);
    }
  }, _SECOND); // Check every _SECOND seconds
};

export { countConnect, checkOverload };
