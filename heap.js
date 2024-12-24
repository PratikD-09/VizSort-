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

async function heapify(arr, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest])
    largest = l;

  if (r < n && arr[r] > arr[largest])
    largest = r;

  if (largest !== i) {
    swap(arr, i, largest);
    const arrayContainer = document.getElementById('arrayContainer');
    const bars = arrayContainer.querySelectorAll('.bar');
    [bars[i].style.height, bars[largest].style.height] = [bars[largest].style.height, bars[i].style.height];
    await new Promise(resolve => setTimeout(resolve, 100 - document.getElementById('speedRange').value));
    await heapify(arr, n, largest);
  }
}

async function heapSort() {
  const n = array.length;
  const arrayContainer = document.getElementById('arrayContainer');

  for (let i = Math.floor(n / 2) - 1; i >= 0 && !stopSortingFlag; i--)
    await heapify(array, n, i);

  for (let i = n - 1; i > 0 && !stopSortingFlag; i--) {
    swap(array, 0, i);
    const bars = arrayContainer.querySelectorAll('.bar');
    [bars[0].style.height, bars[i].style.height] = [bars[i].style.height, bars[0].style.height];
    await new Promise(resolve => setTimeout(resolve, 100 - document.getElementById('speedRange').value));
    await heapify(array, i, 0);
  }
}

function startSorting() {
  stopSortingFlag = false;
  heapSort();
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
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-c\">// C program for Heap Sort\n\nvoid heapify(int arr[], int n, int i) {\n    int largest = i;\n    int l = 2*i + 1;\n    int r = 2*i + 2;\n\n    if (l < n && arr[l] > arr[largest])\n        largest = l;\n\n    if (r < n && arr[r] > arr[largest])\n        largest = r;\n\n    if (largest != i) {\n        int temp = arr[i];\n        arr[i] = arr[largest];\n        arr[largest] = temp;\n        heapify(arr, n, largest);\n    }\n}\n\nvoid heapSort(int arr[], int n) {\n    for (int i = n / 2 - 1; i >= 0; i--)\n        heapify(arr, n, i);\n\n    for (int i = n - 1; i > 0; i--) {\n        int temp = arr[0];\n        arr[0] = arr[i];\n        arr[i] = temp;\n\n        heapify(arr, i, 0);\n    }\n}\n</code></pre>";
            break;
        case 'cpp':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-cpp\">// C++ program for Heap Sort\n\n#include <iostream>\nusing namespace std;\n\nvoid heapify(int arr[], int n, int i) {\n    int largest = i;\n    int l = 2*i + 1;\n    int r = 2*i + 2;\n\n    if (l < n && arr[l] > arr[largest])\n        largest = l;\n\n    if (r < n && arr[r] > arr[largest])\n        largest = r;\n\n    if (largest != i) {\n        int temp = arr[i];\n        arr[i] = arr[largest];\n        arr[largest] = temp;\n        heapify(arr, n, largest);\n    }\n}\n\nvoid heapSort(int arr[], int n) {\n    for (int i = n / 2 - 1; i >= 0; i--)\n        heapify(arr, n, i);\n\n    for (int i = n - 1; i > 0; i--) {\n        int temp = arr[0];\n        arr[0] = arr[i];\n        arr[i] = temp;\n\n        heapify(arr, i, 0);\n    }\n}\n</code></pre>";
            break;
        case 'java':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-java\">// Java program for Heap Sort\n\npublic class HeapSort {\n    void heapify(int arr[], int n, int i) {\n        int largest = i;\n        int l = 2 * i + 1;\n        int r = 2 * i + 2;\n\n        if (l < n && arr[l] > arr[largest])\n            largest = l;\n\n        if (r < n && arr[r] > arr[largest])\n            largest = r;\n\n        if (largest != i) {\n            int temp = arr[i];\n            arr[i] = arr[largest];\n            arr[largest] = temp;\n            heapify(arr, n, largest);\n        }\n    }\n\n    void heapSort(int arr[]) {\n        int n = arr.length;\n\n        for (int i = n / 2 - 1; i >= 0; i--)\n            heapify(arr, n, i);\n\n        for (int i = n - 1; i > 0; i--) {\n            int temp = arr[0];\n            arr[0] = arr[i];\n            arr[i] = temp;\n\n            heapify(arr, i, 0);\n        }\n    }\n}\n</code></pre>";
            break;
        case 'python':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-python\"># Python program for Heap Sort\n\ndef heapify(arr, n, i):\n    largest = i\n    l = 2 * i + 1\n    r = 2 * i + 2\n\n    if l < n and arr[l] > arr[largest]:\n        largest = l\n\n    if r < n and arr[r] > arr[largest]:\n        largest = r\n\n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)\n\n\ndef heapSort(arr):\n    n = len(arr)\n\n    for i in range(n // 2 - 1, -1, -1):\n        heapify(arr, n, i)\n\n    for i in range(n - 1, 0, -1):\n        arr[0], arr[i] = arr[i], arr[0]\n        heapify(arr, i, 0)\n</code></pre>";
            break;
        case 'javascript':
            contentDiv.innerHTML = "<p></p><pre><code class=\"language-javascript\">// JavaScript program for Heap Sort\n\nfunction heapify(arr, n, i) {\n    let largest = i;\n    let l = 2 * i + 1;\n    let r = 2 * i + 2;\n\n    if (l < n && arr[l] > arr[largest])\n        largest = l;\n\n    if (r < n && arr[r] > arr[largest])\n        largest = r;\n\n    if (largest !== i) {\n        [arr[i], arr[largest]] = [arr[largest], arr[i]];\n        heapify(arr, n, largest);\n    }\n}\n\nfunction heapSort(arr) {\n    const n = arr.length;\n\n    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)\n        heapify(arr, n, i);\n\n    for (let i = n - 1; i > 0; i--) {\n        [arr[0], arr[i]] = [arr[i], arr[0]];\n        heapify(arr, i, 0);\n    }\n}\n</code></pre>";
            break;
        default:
            contentDiv.innerHTML = "<p>Please select a programming language.</p>";
            break;
    }
  }
  
  

