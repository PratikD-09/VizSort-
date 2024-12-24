let array = [];
let stopSortingFlag = false;

function generateArray(size) {
  const arrayContainer = document.getElementById('arrayContainer');
  arrayContainer.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    array.push(value);
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 3}px`;
    arrayContainer.appendChild(bar);
  }
}
generateArray(40);

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

async function selectionSort() {
  const n = array.length;
  const arrayContainer = document.getElementById('arrayContainer');

  for (let i = 0; i < n - 1 && !stopSortingFlag; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n && !stopSortingFlag; j++) {
      const bars = arrayContainer.querySelectorAll('.bar');
      bars[j].style.backgroundColor = 'gray';
      await new Promise(resolve => setTimeout(resolve, 100 - document.getElementById('speedRange').value));
      bars[j].style.backgroundColor = 'black';
      if (array[j] < array[min_idx]) {
        min_idx = j;
      }
    }
    swap(array, min_idx, i);
    const bars = arrayContainer.querySelectorAll('.bar');
    [bars[i].style.height, bars[min_idx].style.height] = [bars[min_idx].style.height, bars[i].style.height];
  }
}

function startSorting() {
  stopSortingFlag = false;
  selectionSort();
}

function stopSorting() {
  stopSortingFlag = true;
}

function resetArray() {
  stopSortingFlag = true;
  array = [];
  const size = parseInt(document.getElementById('arraySizeInput').value);
  generateArray(size);
}

function fn() {
  document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });
}

fn();

function fn1() {
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
  });
}

fn1();






// algorethem Menu


function showContent(language) {
    let contentDiv = document.getElementById('content');
    switch (language) {
        case 'c':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-c\">// C program for selection sort\n\nvoid selectionSort(int arr[], int n) {\n    int i, j, min_idx, temp;\n    for (i = 0; i < n-1; i++) {\n        min_idx = i;\n        for (j = i+1; j < n; j++) {\n            if (arr[j] < arr[min_idx]) {\n                min_idx = j;\n            }\n        }\n        temp = arr[min_idx];\n        arr[min_idx] = arr[i];\n        arr[i] = temp;\n    }\n}\n</code></pre>";
            break;
        case 'cpp':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-cpp\">// C++ program for selection sort\n\n#include <iostream>\nusing namespace std;\nvoid selectionSort(int arr[], int n) {\n    int i, j, min_idx, temp;\n    for (i = 0; i < n-1; i++) {\n        min_idx = i;\n        for (j = i+1; j < n; j++) {\n            if (arr[j] < arr[min_idx]) {\n                min_idx = j;\n            }\n        }\n        temp = arr[min_idx];\n        arr[min_idx] = arr[i];\n        arr[i] = temp;\n    }\n}\n</code></pre>";
            break;
        case 'java':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-java\">// Java program for selection sort\n\npublic class SelectionSort {\n    void selectionSort(int arr[]) {\n        int n = arr.length;\n        for (int i = 0; i < n-1; i++) {\n            int min_idx = i;\n            for (int j = i+1; j < n; j++) {\n                if (arr[j] < arr[min_idx]) {\n                    min_idx = j;\n                }\n            }\n            int temp = arr[min_idx];\n            arr[min_idx] = arr[i];\n            arr[i] = temp;\n        }\n    }\n}\n</code></pre>";
            break;
        case 'python':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-python\"># Python program for selection sort\n\ndef selectionSort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        min_idx = i\n        for j in range(i+1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n</code></pre>";
            break;
        case 'javascript':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-javascript\">// JavaScript program for selection sort\n\nfunction selectionSort(arr) {\n    let len = arr.length;\n    for (let i = 0; i < len-1; i++) {\n        let min_idx = i;\n        for (let j = i+1; j < len; j++) {\n            if (arr[j] < arr[min_idx]) {\n                min_idx = j;\n            }\n        }\n        let temp = arr[min_idx];\n        arr[min_idx] = arr[i];\n        arr[i] = temp;\n    }\n}\n</code></pre>";
            break;
        default:
            contentDiv.innerHTML = "<p>Please select a programming language.</p>";
            break;
    }
  }
  

