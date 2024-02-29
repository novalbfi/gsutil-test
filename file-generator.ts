import { $ } from "bun";

for (let i = 0; i < 1500; i++) {
  await $`echo test-${i} > ./files/file-${i}.txt`
}

